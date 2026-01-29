const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Enrollment extends Model {
    static associate(models) {
      // Đăng ký thuộc về Lớp học phần
      Enrollment.belongsTo(models.CourseOffering, { foreignKey: 'offeringId' });
      
      // Đăng ký có một Bảng điểm (Quan hệ 1-1)
      Enrollment.hasOne(models.Grade, { foreignKey: 'enrollmentId' });
      
      // Đăng ký thuộc về một Sinh viên
      Enrollment.belongsTo(models.Student, { foreignKey: 'studentId' });
    }
  }

  Enrollment.init(
    {
      enrollmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      studentId: {
        type: DataTypes.STRING,
        allowNull: false
      },

      offeringId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      enrollDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'hoc'
        // hoc | huy
      }
    },
    {
      sequelize,
      modelName: 'Enrollment',
      tableName: 'enrollments',
      timestamps: false
    }
  );

  return Enrollment;
};
