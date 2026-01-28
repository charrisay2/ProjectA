const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class CourseOffering extends Model {}

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
