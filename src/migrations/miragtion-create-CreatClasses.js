'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      class_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      class_name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      major_id: {
        type: Sequelize.STRING,
        allowNull: false
      },

      course_year: {
        type: Sequelize.STRING,
        allowNull: false
      },

      advisor_id: {
        type: Sequelize.STRING,
        allowNull: true
        // FK → Lecturers
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Classes');
  }
};
