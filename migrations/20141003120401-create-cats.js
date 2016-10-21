"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('responses', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER
        },

        imageicon_user: {type: Sequelize.STRING, default:"https://u.o0bc.com/avatars/no-user-image.gif"},

        smoke_user: {type: Sequelize.BOOLEAN, default: false},
        smoke_roommate: Sequelize.STRING,

        schedule_user: {type: Sequelize.BOOLEAN, default: false},
        schedule_roommate: Sequelize.STRING,

        personality_user: {type: Sequelize.BOOLEAN, default: false},
        personality_roommate: Sequelize.STRING,
        
        parties_user: {type: Sequelize.BOOLEAN, default: false},
        parties_roommate: Sequelize.STRING,
        
        friends_user: {type: Sequelize.BOOLEAN, default: false},
        friends_roommate: Sequelize.STRING,
        
        pets_user: {type: Sequelize.BOOLEAN, default: false},
        pets_roommate: Sequelize.STRING,
        
        cleanliness_user: {type: Sequelize.BOOLEAN, default: false},
        cleanliness_roommate: Sequelize.STRING,
        
        music_user: {type: Sequelize.BOOLEAN, default: false},
        musi_roommatec: Sequelize.STRING,

        bio_user: {type: Sequelize.STRING, default:"No Bio Available"},
        zipcode_user: Sequelize.INTEGER,

        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('responses');
  }
};
