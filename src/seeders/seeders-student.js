'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          student_id: 'SV001',
          full_name: 'Nguyen Van A',
          dob: '2004-05-10',
          gender: true,
          email: 'sv001@gmail.com',
          phone: '0901234567',
          address: 'Ha Noi',
          class_id: 'CNTT01',
          status: 'dang_hoc',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 'SV002',
          full_name: 'Tran Thi B',
          dob: '2004-08-20',
          gender: false,
          email: 'sv002@gmail.com',
          phone: '0912345678',
          address: 'Da Nang',
          class_id: 'CNTT01',
          status: 'dang_hoc',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 'SV003',
          full_name: 'Le Van C',
          dob: '2003-12-01',
          gender: true,
          email: 'sv003@gmail.com',
          phone: null,
          address: 'TP HCM',
          class_id: 'CNTT02',
          status: 'bao_luu',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};
