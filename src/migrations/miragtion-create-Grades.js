'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Grades', {
      grade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      enrollment_id: {
        type: Sequelize.INTEGER,
        allowNull: false
        // FOREIGN KEY → Enrollments
      },

      attendance: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      midterm: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      final: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      total: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      letter_grade: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Grades');
  }
};
