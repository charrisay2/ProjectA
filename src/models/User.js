const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
        // lưu mật khẩu đã hash
      },

      role: {
        type: DataTypes.ENUM('admin', 'lecturer', 'student'),
        allowNull: false
      },

      studentId: {
        type: DataTypes.STRING,
        allowNull: true
      },

      lecturerId: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: false
    }
  );

  return User;
};
