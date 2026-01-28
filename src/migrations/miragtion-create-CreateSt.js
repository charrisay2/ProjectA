'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      student_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true   // MSSV
      },

      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      gender: {
        type: Sequelize.BOOLEAN,
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

      address: {
        type: Sequelize.STRING
      },

      class_id: {
        type: Sequelize.STRING,
        allowNull: false
        // nếu có bảng Classes thì lát add foreign key
      },

      status: {
        type: Sequelize.STRING,
        defaultValue: 'dang_hoc'
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};
