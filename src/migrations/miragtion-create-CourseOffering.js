'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CourseOfferings', {
      offering_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      course_id: {
        type: Sequelize.STRING,
        allowNull: false
        // FOREIGN KEY → Courses
      },

      lecturer_id: {
        type: Sequelize.STRING,
        allowNull: false
        // FOREIGN KEY → Lecturers
      },

      semester: {
        type: Sequelize.STRING,
        allowNull: false
      },

      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      max_students: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CourseOfferings');
  }
};
