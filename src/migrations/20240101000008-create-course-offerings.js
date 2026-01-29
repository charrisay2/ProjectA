'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('course_offerings', {
      offeringId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      semester: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      maxStudents: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      // FK: Môn học gốc
      courseId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'courseId'
        }
      },
      // FK: Giảng viên dạy
      lecturerId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'lecturers',
          key: 'lecturerId'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('course_offerings');
  }
};