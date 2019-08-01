// var db = require("../models");
// var app = express();

module.exports = function (sequelize, DataTypes) {
  // console.log("sequelize???00-----", sequelize);
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.TEXT,
    location: DataTypes.STRING
  },
    { freezeTableName: true }
  );
  return User;
};

// db.sequelize.sync({ force: true })
//   .then(function(){
//     SignUp.create({
//       firstName: "Sheena",
//       lastName: "Brevig",
//       email: "sheena.brevig@gmail.com",
//        location: "Los Angeles, CA"
//     }).then (function(newUser) {
//       return newUser;
      
//   })
// })

