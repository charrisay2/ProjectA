const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Payment extends Model {
    static associate(models) {
      // Thanh toán thuộc về một Hóa đơn học phí
      Payment.belongsTo(models.Tuition, { foreignKey: 'tuitionId' });
    }
  }

  Payment.init(
    {
      paymentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      tuitionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      paymentDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },

      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      method: {
        type: DataTypes.STRING,
        allowNull: false
        // tien_mat | chuyen_khoan
      }
    },
    {
      sequelize,
      modelName: 'Payment',
      tableName: 'payments',
      timestamps: false
    }
  );

  return Payment;
};
