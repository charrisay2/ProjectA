const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Enrollment extends Model {}

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
