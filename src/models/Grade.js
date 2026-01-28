const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Grade extends Model {}

  Grade.init(
    {
      gradeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      enrollmentId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      attendance: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      midterm: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      final: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      total: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      letterGrade: {
        type: DataTypes.STRING,
        allowNull: false
        // A, B, C, D, F
      }
    },
    {
      sequelize,
      modelName: 'Grade',
      tableName: 'grades',
      timestamps: false
    }
  );

  return Grade;
};
