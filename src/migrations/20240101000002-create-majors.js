'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('majors', {
      majorId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      majorName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      totalCredits: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('majors');
  }
};