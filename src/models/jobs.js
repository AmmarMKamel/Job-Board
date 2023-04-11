const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Jobs = sequelize.define(
  "jobs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
  },
  { tableName: "jobs", timestamps: false }
);

module.exports = Jobs;
