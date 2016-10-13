'use strict';
module.exports = function(sequelize, DataTypes) {
  var matchnow = sequelize.define('matchnow', {
    matchname: DataTypes.STRING,
    smoke: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return matchnow;
};