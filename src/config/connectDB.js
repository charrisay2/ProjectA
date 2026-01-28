const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database_development", "root", "123456", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
