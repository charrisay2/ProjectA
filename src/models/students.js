const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Student extends Model {}

  Student.init(
    {
      student_id: {
        type: DataTypes.STRING,
        field: 'student_id',
        primaryKey: true,      
        allowNull: false
      },

      full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      dob: {
        type: DataTypes.DATEONLY, 
        allowNull: false
      },

      gender: {
        type: DataTypes.BOOLEAN, 
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },

      address: {
        type: DataTypes.STRING,
        allowNull: true
      },

      class_id: {
        type: DataTypes.STRING,
        allowNull: false
      },

      status: {
        type: DataTypes.ENUM('dang_hoc', 'bao_luu'),
        defaultValue: 'dang_hoc'
      }
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students',
      timestamps: true
    }
  );

  return Student;
};
