const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    dialect: "mysql",
    port: process.env.MYSQLPORT,
    logging: false,
    timestamps: false,
  }
);

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection successful");
  } catch (error) {
    throw error;
  }
}

async function syncModels(value) {
  const state = {
    alter: { alter: true },
    force: { force: true },
  };

  try {
    await sequelize.sync(state[value] || "");
    console.log(
      `All models synchronized using ${JSON.stringify(state[value]) || ""}`
    );
  } catch (error) {
    throw error;
  }
}
module.exports = { sequelize, checkConnection, syncModels };
