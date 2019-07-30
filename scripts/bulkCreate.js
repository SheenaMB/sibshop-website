var seedData = require("./seeds");
var express = require("express");
var sequelize = require("sequelize");
var Library = require("../models/Library");
var Community = require("../models/Community");
var db = require("../models");


db.sequelize.sync({ force: true }).then(function () {
    // app.listen(PORT, function() {
    //   console.log(
    //     "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    //     PORT,
    //     PORT
    db.Library.bulkCreate(seedData)
        // .then(() => { // Notice: There are no arguments here, as of right now you'll have to...
        //     return Library.findAll();
        // })
        .then(data => {
            console.log("\n------------------------\n")
            console.log("success with data") // ... in order to get the array of user objects
        })  
    });

