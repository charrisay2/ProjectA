'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // 1. Tạo Khoa (Faculties)
    await queryInterface.bulkInsert('Faculties', [
      { facultyid: 'CNTT', facultyName: 'Công nghệ thông tin', phone: '0123456789', email: 'cntt@uni.edu.vn' },
      { facultyid: 'KT', facultyName: 'Kinh tế', phone: '0987654321', email: 'kinhte@uni.edu.vn' }
    ]);

    // 2. Tạo Ngành (Majors)
    await queryInterface.bulkInsert('Majors', [
      { majorId: 'SE', majorName: 'Kỹ thuật phần mềm', facultyId: 'CNTT', totalCredits: 150 },
      { majorId: 'BA', majorName: 'Quản trị kinh doanh', facultyId: 'KT', totalCredits: 140 }
    ]);

    // 3. Tạo Giảng viên (Lecturers)
    await queryInterface.bulkInsert('Lecturers', [
      { lecturerId: 'GV01', fullName: 'Nguyễn Văn Thầy', email: 'thaynv@uni.edu.vn', phone: '0909000001', facultyId: 'CNTT' },
      { lecturerId: 'GV02', fullName : 'Trần Thị Cô', email: 'cott@uni.edu.vn', phone: '0909000002', facultyId: 'KT' }
    ]);

    // 4. Tạo Môn học (Courses)
    await queryInterface.bulkInsert('Courses', [
      { courseId: 'PRF192', courseName: 'Nhập môn lập trình C', credits: 3, majorId: 'SE' },
      { courseId: 'PRO192', courseName: 'Lập trình Java', credits: 3, majorId: 'SE' },
      { courseId: 'ECO101', courseName: 'Kinh tế vi mô', credits: 3, majorId: 'BA' }
    ]);

    // 5. Tạo Lớp sinh hoạt (Classes)
    await queryInterface.bulkInsert('Classes', [
      { classId: 'SE1501', className: 'Lớp SE 01', majorId: 'SE', courseYear: '2023-2027', advisorId: 'GV01' },
      { classId: 'BA1501', className: 'Lớp BA 01', majorId: 'BA', courseYear: '2023-2027', advisorId: 'GV02' }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Classes', null, {});
    await queryInterface.bulkDelete('Courses', null, {});
    await queryInterface.bulkDelete('Lecturers', null, {});
    await queryInterface.bulkDelete('Majors', null, {});
    await queryInterface.bulkDelete('Faculties', null, {});
  }
};