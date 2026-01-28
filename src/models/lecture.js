const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Lecturer extends Model {}

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
