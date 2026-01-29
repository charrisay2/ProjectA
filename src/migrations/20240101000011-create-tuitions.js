'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tuitions', {
      tuitionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      // FK: Sinh viên
      studentId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'students', // Khớp với tên bảng trong file create-students
          key: 'studentId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      semester: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      totalAmount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      paidAmount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'chua_du'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tuitions');
  }
};
