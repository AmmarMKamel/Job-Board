const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Job = sequelize.define(
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
    level: {
      type: DataTypes.ENUM(
        "Internship",
        "Junior",
        "Entry",
        "Mid Level",
        "Senior"
      ),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(
        "Freelance",
        "Contract",
        "Part Time",
        "Full Time",
        "Remote"
      ),
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
  },
  { tableName: "jobs", timestamps: false }
);

module.exports = Job;
