'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      schedule_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      offering_id: {
        type: Sequelize.INTEGER,
        allowNull: false
        // FOREIGN KEY → CourseOfferings
      },

      day_of_week: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      start_time: {
        type: Sequelize.TIME,
        allowNull: false
      },

      end_time: {
        type: Sequelize.TIME,
        allowNull: false
      },

      room: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedules');
  }
};
