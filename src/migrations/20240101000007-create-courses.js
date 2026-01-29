'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      courseId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      courseName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      credits: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      // FK: Môn học thuộc Ngành
      majorId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'majors',
          key: 'majorId'
        },
        onUpdate: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};