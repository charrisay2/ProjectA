const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Course extends Model {
    static associate(models) {
      // Môn học thuộc về Ngành
      Course.belongsTo(models.Major, { foreignKey: 'majorId' });
      
      // Môn học có nhiều Lớp học phần mở ra (theo kỳ)
      Course.hasMany(models.CourseOffering, { foreignKey: 'courseId' });
    }
  }

  Course.init(
    {
      courseId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },

      courseName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      credits: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      majorId: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses',
      timestamps: false
    }
  );

  return Course;
};
