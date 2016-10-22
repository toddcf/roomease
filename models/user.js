"use strict";

module.exports  = function(sequelize, DataTypes) {
    var User    = sequelize.define("User", {
        firstname:DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING
    }, {
        underscored: true,
        freezeTableName: true,

        // Define table name
        tableName: 'users',
        classMethods: {
            associate: function(models) {
                User.hasOne(models.Response, {
                    onDelete: "CASCADE",
                    hooks: true,
                    foreignKey: {
                        allowNull: false
                    }
                })
            }
        }
    })

    return User;
};