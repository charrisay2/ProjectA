'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const hashPassword = '$2a$10$RunningHashExampleOnly...'; 
  
    await queryInterface.bulkInsert('students', [
      {
        studentId: 'SV001',     
        fullName: 'Lê Văn Tèo', 
        dob: '2003-01-01',
        gender: true,
        email: 'teolv@st.uni.edu.vn',
        phone: '0912345678',
        address: 'Hồ Chí Minh',
        classId: 'SE1501',       
        status: 'dang_hoc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 'SV002',
        fullName: 'Nguyễn Thị Tí',
        dob: '2003-05-05',
        gender: false,
        email: 'tint@st.uni.edu.vn',
        phone: '0987123456',
        address: 'Hà Nội',
        classId: 'BA1501',
        status: 'dang_hoc',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);


    await queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        password: '123', 
        role: 'admin',
        studentId: null,     
        lecturerId: null     
      },
      {
        username: 'sv001',
        password: '123', 
        role: 'student',
        studentId: 'SV001',
        lecturerId: null
      },
      {
        username: 'gv01',
        password: '123',
        role: 'lecturer',
        studentId: null,
        lecturerId: 'GV01'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('students', null, {});
  }
};