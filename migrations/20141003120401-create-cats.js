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
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('responses');
  }
};
