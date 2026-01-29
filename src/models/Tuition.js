const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Tuition extends Model {
    static associate(models) {
      // Học phí thuộc về Sinh viên
      Tuition.belongsTo(models.Student, { foreignKey: 'studentId' });

      // Học phí có nhiều lần Thanh toán (Payment)
      Tuition.hasMany(models.Payment, { foreignKey: 'tuitionId' });
    }
  }

  Tuition.init(
    {
      tuitionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      studentId: {
        type: DataTypes.STRING,
        allowNull: false
      },

      semester: {
        type: DataTypes.STRING,
        allowNull: false
        // Ví dụ: HK1, HK2
      },

      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      paidAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'chua_du'
        // chua_du | da_du
      }
    },
    {
      sequelize,
      modelName: 'Tuition',
      tableName: 'tuitions',
      timestamps: false
    }
  );

  return Tuition;
};
