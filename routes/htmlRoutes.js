require("dotenv").config();

var db = require("../models");
var axios = require("axios");
var moment = require('moment');
var cheerio = require("cheerio");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Article.find({}).then(function (dbArticle) {
            res.json(dbArticle);
        }).catch(function (err) {
            res.json(err);
        });
    });
};