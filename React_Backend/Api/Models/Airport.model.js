const { DataTypes } = require("sequelize");

const { sequelize } = require("../../Database/index");

const Airport = sequelize.define(
  "Airport",
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    elevation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    runwayCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    runwayLength: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    terminalCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    contactNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Airport;
