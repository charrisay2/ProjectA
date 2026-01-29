const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class CourseOffering extends Model {
    static associate(models) {
      // Lớp học phần thuộc về Môn học gốc
      CourseOffering.belongsTo(models.Course, { foreignKey: 'courseId' });
      
      // Lớp học phần được dạy bởi Giảng viên
      CourseOffering.belongsTo(models.Lecturer, { foreignKey: 'lecturerId' });
      
      // Lớp học phần có nhiều bản ghi Đăng ký
      CourseOffering.hasMany(models.Enrollment, { foreignKey: 'offeringId' });
      // Lớp học phần có lịch học (Schedule)
      CourseOffering.hasMany(models.Schedule, { foreignKey: 'offeringId' });
    }
  }

  CourseOffering.init(
    {
      offeringId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      courseId: {
        type: DataTypes.STRING,
        allowNull: false
      },

      lecturerId: {
        type: DataTypes.STRING,
        allowNull: false
      },

      semester: {
        type: DataTypes.STRING,
        allowNull: false
        // Ví dụ: HK1, HK2
      },

      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      maxStudents: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'CourseOffering',
      tableName: 'course_offerings',
      timestamps: false
    }
  );

  return CourseOffering;
};
