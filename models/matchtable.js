'use strict';
module.exports = function(sequelize, DataTypes) {
  var matchtable = sequelize.define('matchtable', {
    userid: DataTypes.INTEGAR,
    name: DataTypes.STRING,
    smoke: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return matchtable;
};