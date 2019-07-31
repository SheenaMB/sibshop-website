var db = require("../models");

module.exports = function(app) {
  // Load index page


  app.get("/", function(req, res) {
    db.Library.findAll({}).then(function(dbLibrary) {
      res.render("index");
    });
  });

  // Load example page and pass in an example by id
  app.get("/community", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      console.log('community')
      res.render("community", {
    });
  });

  app.get("/workshop", function(req, res) {
    console.log("community")
    res.render("workshop", {
    });
  });

  app.get("/library", function(req, res) {
    console.log("library")
    res.render("library", {
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
