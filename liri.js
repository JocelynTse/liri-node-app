require("dotenv").config();

const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const request = require("request");
const dotenv = require("dotenv");
const fs = require("fs");

const keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

const media = process.argv[2];

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
}

function tweets() {
    client.get('statuses/home_timeline', function (error, text, created_at) {
        if (error !== null) {
            console.error(error);
        } else {
            console.log(JSON.stringify(text));
            //console.log(created_at)
        }
    })
}

function song() {
    spotify.search({ type: 'track', query: input }, function (error, data) {
        if (error !== null) {
            console.error(error);
        } else {
            console.log(data);
        }
    });
}

function movie() {
    request("http://www.omdbapi.com/?t=" + input + "=&plot=short&apikey=trilogy", function (error, response, body) {
        if (error !== null) {
            console.error(error);
        } else if (input === undefined) {
            input = ;
        } else if ()

        }
    })
}

function text() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            console.error(err);
        }

        
    })
}