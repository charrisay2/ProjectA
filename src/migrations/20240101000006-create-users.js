'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM('admin', 'lecturer', 'student'),
        allowNull: false
      },
      // FK: Link tới Sinh viên (nếu role là student)
      studentId: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'students',
          key: 'studentId'
        },
        onDelete: 'CASCADE'
      },
      // FK: Link tới Giảng viên (nếu role là lecturer)
      lecturerId: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'lecturers',
          key: 'lecturerId'
        },
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};