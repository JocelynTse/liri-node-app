require("dotenv").config();

const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const request = require("request");
const dotenv = require("dotenv");
const fs = require("fs");

const keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

let media = process.argv[2];
let input = process.argv[3];

function runMedia(type) {
    switch (type) {
        case "my-tweets":
            tweets();
            break;
        case "spotify-this-song":
            song();
            break;
        case "movie-this":
            movie();
            break;
        case "do-what-it-says":
            text();
            break;
    }
};


//twitter.js
function tweets() {
    client.get("statuses/home_timeline", function (error, tweets, response) {
        if (error !== null) {
            console.error(error);
        } else {
            for (let i = 0; i <= 19; i++) {
                let thread = JSON.stringify(tweets[i]).text;
                let time = JSON.stringify(tweets[i]).created_at;
                console.log("Tweet: " + thread);
                console.log("Created at: " + time);
            }
        }
    })
};


//spotify.js
function song() {
    spotify.search({ type: "track", query: input }, function (error, data) {
        if (error !== null) {
            console.error(error);
        } else {
            console.log("Artist(s): " + JSON.parse(data).tracks.items[0].album.artists[0].name);
            console.log("Song Name: " + JSON.parse(data).tracks.items[0].name);
            console.log("Preview Link: " + JSON.parse(data).tracks.items[0].preview_url);
            console.log("Album: " + JSON.parse(data).tracks.items[0].album.name);
        }
    })
};

//omdb.js
function movie() {
    let queryUrl = "http://www.omdbapi.com/?t=" + input + "=&plot=short&apikey=trilogy"
    request(queryUrl, function (error, response, body) {
        if (error !== null) {
            console.error(error);
        } else {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    })
};


function text() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error !== null) {
            console.error(error);
        } else {
            data = data.split(",");
            media = data[0];
            input = data[1];
        }
    })
};