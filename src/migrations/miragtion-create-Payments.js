'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      payment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      tuition_id: {
        type: Sequelize.INTEGER,
        allowNull: false
        // FOREIGN KEY → Tuitions
      },

      payment_date: {
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
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};
