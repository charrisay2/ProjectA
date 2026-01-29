'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      paymentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      // FK: Hóa đơn học phí
      tuitionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tuitions', // Khớp với tên bảng tuitions ở trên
          key: 'tuitionId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      paymentDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      method: {
        type: Sequelize.STRING,
        allowNull: false
        // tien_mat | chuyen_khoan
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('payments');
  }
};