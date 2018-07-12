require("dotenv").config();

//const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
//const request = require("request");
const dotenv = require("dotenv");
//const fs = require("fs");

const keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);

//const media = process.argv[2];

let input = process.argv[2];

//function song() {
    spotify.search({ type: "track", query: input }, function (error, data) {
        if (error !== null) {
            console.error(error);
        //} else if (input === "") {
        //    input = "The Sign";
        //    return console.log(data);
        } else {
            console.log("Artist(s): " + JSON.parse(data).tracks.items[0].album.artists[0].name);
            console.log("Song Name: " + JSON.parse(data).tracks.items[0].name);
            console.log("Preview Link: " + JSON.parse(data).tracks.items[0].preview_url);
            console.log("Album: " + JSON.parse(data).tracks.items[0].album.name);
        }
    })
//};