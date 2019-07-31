module.exports = function(sequelize, DataTypes) {
    var Community = sequelize.define("Community", {
      title: DataTypes.STRING,
      date: DataTypes.INTEGER,
      url: DataTypes.TEXT,
      place: DataTypes.STRING
    });
    return Community;
  };