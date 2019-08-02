var db = require("../models");

module.exports = function (app) {

  // Get all books by category (which is organized by number)
  // :category needs to be a number provided by the client side
  // Example: If Books is selected: "/api/library/1"
  // Example: If Article is selected: "/api/library/2"
  // Example: If Young is selected: "/api/library/4"
  // Example: If Adult is selected: "/api/library/3"
  app.get("/library/:category", function (req, res) {
    console.log(req.params.category);
    db.Library.findAll({
      where: {
        category: req.params.category // where column "category" in database contains the category number passed into the req.params.category
      }
    }).then(function (data) {
      res.render("library", {data:data});
    });
  });

  // app.get("/library", function(req, res) {
  //   console.log("library");
  //   db.Library.findAll({})
  //   .then(function(data){
  //     // console.log("==========   ", data);
  //     console.log(data);
  //     res.render("library", {data});
  //   })
  // });

  // Create a new library
  app.post("/api/library", function (req, res) {
    db.Library.create({
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      category: req.body.category
    }).then(function (response) {
      res.json(response);
    });
  });

  // Delete a library by id
  app.delete("/api/library/delete/:id", function (req, res) {
    console.log("dde")
    db.Library.destroy({ where: { id: req.params.id } }).then(function (response) {
      res.status(response);
      console.log(response);
      // res.json(response);
    });
  });





  //==================================

  // GET all community posts
  app.get("/api/community", function (req, res) {
    db.User.findAll({}).then(function (response) {
      res.json(response);
    })
  });

  // Create a new post 
  app.post("/api/community", function (req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      state: req.body.state 
    })
    .then(function (response) {
      res.json(response);
    })
  });

  // Update a new post 
  app.put("/api/community", function (req, res) {
    db.Community.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (response) {
        res.json(response);
      })
  });

  // Delete a post
  app.delete("/api/community/:id", function (req, res) {
    db.Community.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (response) {
        res.json(response);
      });
  });


  // ==========================

  // Get all user info 
  app.get("/api/community/signup/:id", function (req, res) {
    console.log()
    db.SignUp.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (response) {
      console.log("dbSignup", response);
      res.json(response);
    });
  });

  // Create an input 
  app.post("/api/community/signup", function (req, res) {

    db.SignUp.create({
      name: req.body.name,
      email: req.body.email,
      location: req.body.location
    }).then(function (response) {
      res.json(response);
    });
  });

  // Update an input 
  app.put("/api/community/signup", function (req, res) {
    db.SignUp.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (response) {
        res.json(response);
      })
  });

  // Delete an input
  app.delete("/api/community/signup/:id", function (req, res) {
    db.SignUp.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (response) {
        res.json(response);
      });
  });

  // =======================
  // Get all workshop
  app.get("/api/community/workshop/:event", function (req, res) {
    db.Event.findAll({
      where: {
        category: req.params.event
      }
    }).then(function (response) {
      console.log("dbEvent", response);
      res.json(response);
    });
  });

  // ==================
  // Get all training info
  app.get("/api/community/train/:event", function (req, res) {
    db.Train.findAll({
      where: {
        train: req.params.train
      }
    }).then(function (response) {
      console.log("dbTrain", response);
      res.json(response);
    });
  });




}

