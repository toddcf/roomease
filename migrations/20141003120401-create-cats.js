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
        smoke: {type: Sequelize.BOOLEAN, default: false},
        roommateSmoke: Sequelize.STRING,

        schedule: {type: Sequelize.BOOLEAN, default: false},
        roommateschedule: Sequelize.STRING,

        personality: {type: Sequelize.BOOLEAN, default: false},
        roommatepersonality: Sequelize.STRING,
        
        parties: {type: Sequelize.BOOLEAN, default: false},
        roommateparties: Sequelize.STRING,
        
        friends: {type: Sequelize.BOOLEAN, default: false},
        roommatefriends: Sequelize.STRING,
        
        pets: {type: Sequelize.BOOLEAN, default: false},
        roommatepets: Sequelize.STRING,
        
        cleanliness: {type: Sequelize.BOOLEAN, default: false},
        roommatecleanliness: Sequelize.STRING,
        
        music: {type: Sequelize.BOOLEAN, default: false},
        roommatemusic: Sequelize.STRING,

        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('responses');
  }
};
