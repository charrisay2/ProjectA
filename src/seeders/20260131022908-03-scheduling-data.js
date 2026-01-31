'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('course_offerings', [
      { offeringId: 1, courseId: 'PRO192', lecturerId: 'GV01', semester: 'HK1', year: 2025, maxstudents: 30 },
      { offeringId: 2, courseId: 'PRF192', lecturerId: 'GV01', semester: 'HK1', year: 2025, maxstudents: 30 },
      { offeringId: 3, courseId: 'ECO101', lecturerId: 'GV02', semester: 'HK1', year: 2025, maxstudents: 40 }
    ]);

    // 2. Tạo Thời khóa biểu (Schedules) 
    await queryInterface.bulkInsert('schedules', [
      // Lớp Java (ID=1): Học Thứ 2, từ 07:00 đến 09:00 tại phòng 201
      { offeringId: 1, dayOfWeek: 2, startTime: '07:00:00', endTime: '09:00:00', room: '201' },
      
      // Lớp Java (ID=1): Học thêm Thứ 4, từ 07:00 đến 09:00 tại phòng 201 (Môn 4 chỉ)
      { offeringId  : 1, dayOfWeek : 4, startTime: '07:00:00', endTime: '09:00:00', room: '201' },

      // Lớp C (ID=2): Học Thứ 2, từ 09:15 đến 11:15 tại phòng 202 (Không trùng giờ với lớp trên)
      { offeringId: 2, dayOfWeek: 2, startTime: '09:15:00', endTime: '11:15:00', room: '202' }
    ]);

    // 3. Sinh viên đăng ký học (Enrollments)
    await queryInterface.bulkInsert('enrollments', [
      // SV001 đã đăng ký học Java (ID=1)
      { studentId: 'SV001', offeringId: 1, enrollDate: '2025-08-01', status: 'hoc' }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('enrollments', null, {});
    await queryInterface.bulkDelete('schedules', null, {});
    await queryInterface.bulkDelete('course_offerings', null, {});
  }
};