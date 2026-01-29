const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Schedule extends Model {
    static associate(models) {
      // Thời khóa biểu thuộc về một Lớp học phần
      Schedule.belongsTo(models.CourseOffering, { foreignKey: 'offeringId' });
    }
  }

  Schedule.init(
    {
      scheduleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      offeringId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      dayOfWeek: {
        type: DataTypes.INTEGER,
        allowNull: false
        // 2 → Thứ 2, 3 → Thứ 3, ..., 7 → Thứ 7
      },

      startTime: {
        type: DataTypes.TIME,
        allowNull: false
      },

      endTime: {
        type: DataTypes.TIME,
        allowNull: false
      },

      room: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Schedule',
      tableName: 'schedules',
      timestamps: false
    }
  );

  return Schedule;
};
