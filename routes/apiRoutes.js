require("dotenv").config();

var db = require("../models");
var axios = require("axios");
var moment = require('moment');
var cheerio = require("cheerio");

module.exports = function (app) {

    app.get("/scrape", function (req, res) {

        axios.get("https://local.theonion.com/").then(function (response) {
            // console.log(response);

            var $ = cheerio.load(response.data);
            // console.log($);


            $("article h1").each(function (i, element) {
                var result = {};
                // console.log(result);

                result.title = $(this).text();
                // console.log($(this).text());
                result.link = $(this).parent("a").attr("href");
                // console.log($(this).parent("a").attr("href"));

                db.Article.create(result).then(function (dbArticle) {
                    console.log(dbArticle);
                }).catch(function (err) {
                    console.log(err);
                });

            });

        });

    });

    app.get("/articles", function (req, res) {
        db.Article.find({}).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err);
        });
    });

};