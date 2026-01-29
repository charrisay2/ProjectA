'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schedules', {
      scheduleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      // FK: Lớp học phần
      offeringId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'course_offerings', // Lưu ý: tên bảng này phải khớp với file create-course-offerings
          key: 'offeringId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      dayOfWeek: {
        type: Sequelize.INTEGER,
        allowNull: false
        // 2=Thứ 2, ... 8=CN
      },
      startTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      endTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      room: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schedules');
  }
};