"use strict";

module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define("Response", {


    imageicon_user: {type: DataTypes.STRING, defaultValue:"https://u.o0bc.com/avatars/no-user-image.gif" },

    smoke_user: { type: DataTypes.BOOLEAN, defaultValue: false },
    smoke_roommate: DataTypes.STRING,

    schedule_user: { type: DataTypes.BOOLEAN, defaultValue: false },
    schedule_roommate: DataTypes.STRING,

    personality_user: { type: DataTypes.BOOLEAN, defaultValue: false },
    personality_roommate: DataTypes.STRING,
        
    parties_user: { type: DataTypes.BOOLEAN, defaultValue: false },
    parties_roommate: DataTypes.STRING,
        
    friends_user: { type: DataTypes.BOOLEAN, defaultValue: false },
    friends_roommate: DataTypes.STRING,
        
    pets_user: { type: DataTypes.BOOLEAN, defaultValue: false },
    pets_roommate: DataTypes.STRING,
        
    cleanliness_user: { type: DataTypes.BOOLEAN, defaultValue: false },
    cleanliness_roommate: DataTypes.STRING,
        
    music_user: { type: DataTypes.BOOLEAN, defaultValue: false },
    music_roommate: DataTypes.STRING,

  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
      //timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
      //paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: 'responses',

    classMethods: {
      associate: function(models) {
        Response.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });

  return Response;
};
