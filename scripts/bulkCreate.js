var seedData = require("./seeds");
var express = require("express");
var sequelize = require("sequelize");
var Library = require("../models/Library");
// var Community = require("../models/Community");
var db = require("../models");


db.sequelize.sync({ force: true }).then(function () {

    db.Library.bulkCreate(seedData)
      
        .then(data => {
            console.log("\n------------------------\n")
            console.log("success with data") // ... in order to get the array of user objects
        })  
});

