'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enrollments', {
      enrollmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      enrollDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'hoc'
      },
      // FK: Sinh viên
      studentId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'students',
          key: 'studentId'
        },
        onDelete: 'CASCADE'
      },
      // FK: Lớp học phần
      offeringId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'course_offerings',
          key: 'offeringId'
        },
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enrollments');
  }
};