const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Class extends Model {}

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
