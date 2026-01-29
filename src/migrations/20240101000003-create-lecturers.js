'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lecturers', {
      lecturerId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING
      },
      // Khóa ngoại trỏ về Faculties
      facultyId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'faculties',
          key: 'facultyId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lecturers');
  }
};
