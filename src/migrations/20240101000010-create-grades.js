'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('grades', {
      gradeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
      letterGrade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // FK: Kết quả thuộc về 1 bản ghi đăng ký
      enrollmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'enrollments',
          key: 'enrollmentId'
        },
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('grades');
  }
};