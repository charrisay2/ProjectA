'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Majors', {
      major_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      major_name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      faculty_id: {
        type: Sequelize.STRING,
        allowNull: false
        // FK → Faculties
      },

      total_credits: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Majors');
  }
};
