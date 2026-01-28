'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lecturers', {
      lecturer_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      phone: {
        type: Sequelize.STRING
      },

      faculty_id: {
        type: Sequelize.STRING,
        allowNull: false
        // FOREIGN KEY nối sang Faculty
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lecturers');
  }
};
