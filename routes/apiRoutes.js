require("dotenv").config();

var db = require("../models");
var axios = require("axios");
var moment = require('moment');
var cheerio = require("cheerio");

module.exports = function(app) {
    app.get("/scrape", function(req, res) {
        axios.get("https://local.theonion.com/").then(function(response) {
            var $ = cheerio.load(response.data);
            console.log($);

            // $("cw4lnv-6 bqxOdn sc-759qgu-0 jJoMDo h1").each(function(i, element) {
            //     var result = {};

            //     result.title = $(this).children("a"),text("");
            //     result.link = $(this).children("a").attr("href");
            // });
        });
    });

    app.get("/articles", function(req, res) {
        //.
    });


}