var db = require("../models");

module.exports = function(app) {
  // Load index page

  // GOOD =)
  app.get("/", function(req, res){
    res.render("index");
  })

  // Load example page and pass in an example by id
  app.get("/community", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    db.User.findAll({}).then(function (data){
      console.log('community')
      res.render("community", {data});
    })  
  });

  app.get("/library", function(req, res) {
    console.log("library");
    db.Library.findAll({})
    .then(function(data){
      // console.log("==========   ", data);
      console.log(data);
      res.render("library", {data});
    })
     
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
