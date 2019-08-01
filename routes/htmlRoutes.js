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
      console.log('community')
      res.render("community", {libraries: data 
    });
  });

  // app.get("/workshop", function(req, res) {
  //   console.log("community")
  //   res.render("workshop", {
  //   });
  // });
  // app.get("/library", function(req, res) {
  //   console.log("library");
  //   db.Library.findAll({}).then(function(response) {
  //     console.log("resources: ", response);
  //     // res.render("library", {
  //     // });

  //   });
  // });

  app.get("/library", function(req, res) {
    console.log("library");
    db.Library.findAll({})
    .then(function(data){
      // console.log("==========   ", data);
      
      res.render("library", {libraries: data});
    })
     
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
