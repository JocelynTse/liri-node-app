require("dotenv").config();

//const Twitter = require("twitter");
//const Spotify = require("node-spotify-api");
const request = require("request");
const dotenv = require("dotenv");
//const fs = require("fs");

//const keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);

//let media = process.argv[2];
let input = process.argv[2];

//function movie() {
    let queryUrl = "http://www.omdbapi.com/?t=" + input + "=&plot=short&apikey=trilogy"
    request(queryUrl, function (error, response, body) {
        if (error !== null) {
            console.error(error);
        //} else if (input === "") {
        //    input = "Mr. Nobody";
        //    console.log("Title: " + JSON.parse(body).Title);
        //    console.log("Year: " + JSON.parse(body).Year);
        //    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        //    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        //    console.log("Country: " + JSON.parse(body).Country);
        //    console.log("Language: " + JSON.parse(body).Language);
        //    console.log("Plot: " + JSON.parse(body).Plot);
        //    console.log("Actors: " + JSON.parse(body).Actors);
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
//};