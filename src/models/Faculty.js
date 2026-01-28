const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Faculty extends Model {}

  Faculty.init(
    {
      facultyId: {
        type: DataTypes.STRING,
        primaryKey: true
      },

      facultyName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Faculty',
      tableName: 'faculties',
      timestamps: false
    }
  );

  return Faculty;
};
