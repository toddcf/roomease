'use strict';
module.exports = function(sequelize, DataTypes) {
  var matchtable = sequelize.define('matchtable', {
    matchname: DataTypes.STRING,
    smoke: DataTypes.BOOLEAN,
    smokerate: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return matchtable;
};