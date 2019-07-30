var db = require("../models");

module.exports = function(app) {
  // Get all library 
  app.get("/api/library", function(req, res) {
    db.Library.findAll({}).then(function(dbResources) {
      res.json(dbResources);
    });
  });

  // Create a new library
  app.post("/api/library", function(req, res) {
    db.Library.create(req.body).then(function(dbResources) {
      res.json(dbResources);
    });
  });

  // Delete an library by id
  app.delete("/api/library/:id", function(req, res) {
    db.Library.destroy({ where: { id: req.params.id } }).then(function(dbResources) {
      res.json(dbResources);
    });
  });
};
