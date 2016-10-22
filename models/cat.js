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

        bio_user: {type: DataTypes.STRING, defaultValue:"No Bio Available" },
        zipcode_user: DataTypes.INTEGER,

    }, {

        underscored: true,
        freezeTableName: true,

        // Define table name
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