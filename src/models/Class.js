const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Class extends Model {
    static associate(models) { 
      // Lớp thuộc về Ngành
      Class.belongsTo(models.Major, { foreignKey: 'majorId' });
      // Lớp có Giảng viên cố vấn
      // Dùng alias 'advisor' để khi query có thể gọi: class.getAdvisor()
      Class.belongsTo(models.Lecturer, { foreignKey: 'advisorId', as: 'advisor' });
      // Lớp có nhiều Sinh viên
      Class.hasMany(models.Student, { foreignKey: 'class_id' });
    }
  }

  Class.init(
    {
      classId: {
        type: DataTypes.STRING,
        primaryKey: true
      },

      className: {
        type: DataTypes.STRING,
        allowNull: false
      },

      majorId: {
        type: DataTypes.STRING,
        allowNull: false
      },

      courseYear: {
        type: DataTypes.STRING,
        allowNull: false
        // ví dụ: 2021-2025
      },

      advisorId: {
        type: DataTypes.STRING,
        allowNull: true
        // giảng viên cố vấn
      }
    },
    {
      sequelize,
      modelName: 'Class',
      tableName: 'classes',
      timestamps: false
    }
  );

  return Class;
};
