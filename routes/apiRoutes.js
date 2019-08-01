var db = require("../models");

module.exports = function(app) {
  // Get all library 
  app.get("/api/library/:category", function(req, res) {
    db.Library.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(response) {
      console.log("dbRes", response);
      res.json(response);
    });
  });

  // Create a new library
  app.post("/api/library", function(req, res) {
    db.Library.create({
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      category: req.body.category
    }).then(function(response) {
      res.json(response);
    });
  });

  // Delete a library by id
  app.delete("/api/library/:id", function(req, res) {
    db.Library.destroy({ where: { id: req.params.id } }).then(function(response) {
      res.json(response);
    });
  });
    
  //==================================

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
    .then(function(response) {
      res.json(response);
  })
});

// Delete a post
app.delete("api/community/:id", function(req, res){
  db.Community.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(response) {
      res.json(response);
    });
});


// ==========================

// Get all user info 
app.get("/api/community/signup/:id", function(req, res) {
  console.log()
  db.SignUp.findAll({
    where: {
      id: req.params.id
    }
  }).then(function(response) {
    console.log("dbSignup", response);
    res.json(response);
  });
});

// Create an input 
app.post("/api/community/signup", function(req, res) {

  db.SignUp.create({
    name: req.body.name,
    email: req.body.email,
    location: req.body.location
  }).then(function(response) {
    res.json(response);
  });
});

// Update an input 
app.put("api/community/signup", function(req, res){
  db.SignUp.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(response) {
      res.json(response);
  })
});

// Delete a input
app.delete("api/community/signup/:id", function(req, res){
  db.SignUp.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(response) {
      res.json(response);
    });
});

// =======================
// Get all workshop
app.get("/api/community/workshop/:event", function(req, res) {
  db.Event.findAll({
    where: {
      category: req.params.event
    }
  }).then(function(response) {
    console.log("dbEvent", response);
    res.json(response);
  });
});

// ==================
// Get all training info
app.get("/api/community/train/:event", function(req, res) {
  db.Train.findAll({
    where: {
      train: req.params.train
    }
  }).then(function(dbTrain) {
    console.log("dbTrain", response);
    res.json(response);
  });
});








}

// library --> get, input library, 
// workshop --> training date, summary, category
// trainign and actual workshop (children and adult)
// community --> list of who lives where, (name email states disability conditions) 
// (authenticared user) --> find all, findone, create, delete, update 

// database : library, contact list, events 