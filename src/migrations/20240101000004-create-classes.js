'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('classes', {
      classId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      className: {
        type: Sequelize.STRING,
        allowNull: false
      },
      courseYear: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // FK: Ngành
      majorId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'majors',
          key: 'majorId'
        },
        onUpdate: 'CASCADE'
      },
      // FK: Cố vấn học tập (Giảng viên)
      advisorId: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'lecturers',
          key: 'lecturerId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('classes');
  }
};