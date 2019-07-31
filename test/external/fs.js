// Learn how to reach for a file outside project directory.
// Learn how to pipe contents of a file.
// Learn how to intercept contents of a file while piping.

var Test = require("../helpers/test.js");

var fs = require("fs");

var test = new Test("[External] fs", function (callback) {
    setTimeout(function () {
        if (fs !== null) {
            callback("success!");
        } else {
            callback("failed :(");
        }
    }, 1000);
});

module.exports = test;
