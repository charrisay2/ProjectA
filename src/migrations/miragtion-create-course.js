'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      course_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      course_name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      credits: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      major_id: {
        type: Sequelize.STRING,
        allowNull: false
        // FOREIGN KEY → Majors
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};
