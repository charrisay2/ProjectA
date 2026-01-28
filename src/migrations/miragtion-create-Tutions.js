'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tuitions', {
      tuition_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      student_id: {
        type: Sequelize.STRING,
        allowNull: false
        // FOREIGN KEY → Students
      },

      semester: {
        type: Sequelize.STRING,
        allowNull: false
      },

      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      total_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      paid_amount: {
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
    await queryInterface.dropTable('Tuitions');
  }
};
