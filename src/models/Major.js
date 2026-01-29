const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Major extends Model {
    static associate(models) {
      // Ngành thuộc về Khoa
      Major.belongsTo(models.Faculty, { foreignKey: 'facultyId' });
      // Ngành có nhiều Lớp sinh hoạt
      Major.hasMany(models.Class, { foreignKey: 'majorId' });
      // Ngành quản lý nhiều Môn học
      Major.hasMany(models.Course, { foreignKey: 'majorId' });
    }
  }

  Major.init(
    {
      majorId: {
        type: DataTypes.STRING,
        primaryKey: true
      },

      majorName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      facultyId: {
        type: DataTypes.STRING,
        allowNull: false
      },

      totalCredits: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Major',
      tableName: 'majors',
      timestamps: false
    }
  );

  return Major;
};
