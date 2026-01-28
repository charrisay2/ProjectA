'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enrollments', {
      enrollment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      student_id: {
        type: Sequelize.STRING,
        allowNull: false
        // FOREIGN KEY → Students
      },

      offering_id: {
        type: Sequelize.INTEGER,
        allowNull: false
        // FOREIGN KEY → CourseOfferings
      },

      enroll_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'hoc'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enrollments');
  }
};
