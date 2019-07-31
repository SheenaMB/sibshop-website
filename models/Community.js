module.exports = function(sequelize, DataTypes) {
    var SignUp = sequelize.define("SignUp", {
      name: DataTypes.STRING,
      email: DataTypes.TEXT,
      location: DataTypes.STRING
    },
    {freezeTableName: true}
    );
    return SignUp;
  };
  
