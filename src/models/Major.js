const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Major extends Model {}

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
