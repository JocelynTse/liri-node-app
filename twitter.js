require("dotenv").config();

const Twitter = require("twitter");
//const Spotify = require("node-spotify-api");
//const request = require("request");
const dotenv = require("dotenv");
//const fs = require("fs");

const keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//function tweets() {
    client.get("statuses/home_timeline", function (error, tweets) {
        if (error !== null) {
            console.error(error);
        } else {
            for (let i = 0; i <= 19; i++) {
                let thread = JSON.stringify(tweets).response[i].text;
                let time = JSON.stringify(tweets).response[i].created_at;
                console.log(thread);
                console.log(time);
            }
        }
    })
//};
