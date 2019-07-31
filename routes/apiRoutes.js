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
    db.Library.create({
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      url: DataTypes.TEXT,
      category: DataTypes.STRING
    }).then(function(dbResources) {
      res.json(dbResources);
    });
  });

  // Delete a library by id
  app.delete("/api/library/:id", function(req, res) {
    db.Library.destroy({ where: { id: req.params.id } }).then(function(dbResources) {
      res.json(dbResources);
    });
  });

// GET all community posts
app.get("api/community", function(req, res){
  db.Community.findAll({}).then(function(response){
    res.json(response);
  })
});

// Create a new post 
app.post("api/community", function(req, res){
  db.Community.create(req.body).then(function(response){
    res.json(response);
  })
});

// Update a new post 
app.put("api/community", function(req, res){
  db.Community.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbCommunity) {
      res.json(dbCommunity);
})
});

// Delete a post
app.delete("api/community/:id", function(req, res){
  db.Community.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbCommunity) {
      res.json(dbCommunity);
    });
});








}

// library --> get, input library, 
// workshop --> train date, summary, category
// community --> create blog, delete, update, get
// (authenticared user) --> find all, findone, create, delete, update 