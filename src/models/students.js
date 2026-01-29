const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Student extends Model {
    static associate(models) {
      // Sinh viên thuộc về Lớp sinh hoạt
      // Lưu ý: foreignKey phải khớp với cột 'class_id' trong bảng students
      Student.belongsTo(models.Class, { foreignKey: 'class_id' });

      // Sinh viên có nhiều lượt Đăng ký học phần
      Student.hasMany(models.Enrollment, { foreignKey: 'studentId' });

      // Sinh viên có nhiều Hóa đơn học phí
      Student.hasMany(models.Tuition, { foreignKey: 'studentId' });

      // Sinh viên có 1 Tài khoản User (nếu thiết kế 1-1)
      Student.hasOne(models.User, { foreignKey: 'studentId' });
    }
  }

  Student.init(
    {
      student_id: {
        type: DataTypes.STRING,
        field: 'student_id',
        primaryKey: true,      
        allowNull: false
      },

      full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      dob: {
        type: DataTypes.DATEONLY, 
        allowNull: false
      },

      gender: {
        type: DataTypes.BOOLEAN, 
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },

      address: {
        type: DataTypes.STRING,
        allowNull: true
      },

      class_id: {
        type: DataTypes.STRING,
        allowNull: false
      },

      status: {
        type: DataTypes.ENUM('dang_hoc', 'bao_luu'),
        defaultValue: 'dang_hoc'
      }
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students',
      timestamps: true
    }
  );

  return Student;
};
