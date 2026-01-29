const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Lecturer extends Model {
    static associate(models) {
      // Giảng viên thuộc về Khoa
      Lecturer.belongsTo(models.Faculty, { foreignKey: 'facultyId' });
      
      // Giảng viên dạy nhiều Lớp học phần
      Lecturer.hasMany(models.CourseOffering, { foreignKey: 'lecturerId' });
      
      // Giảng viên cố vấn cho nhiều Lớp sinh hoạt
      // Cần dùng alias 'advisedClasses' để phân biệt với các quan hệ khác
      Lecturer.hasMany(models.Class, { foreignKey: 'advisorId', as: 'advisedClasses' });

      // Giảng viên có 1 Tài khoản User
      Lecturer.hasOne(models.User, { foreignKey: 'lecturerId' });
    }
  }

  Lecturer.init(
    {
      lecturerId: {
        type: DataTypes.STRING,
        field: 'lecturer_id',
        primaryKey: true,
        allowNull: false
      },

      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      phone: {
        type: DataTypes.STRING
      },

      facultyId: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Lecturer',
      tableName: 'lecturers',
      timestamps: false
    }
  );

  return Lecturer;
};
