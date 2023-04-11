const sequelize = require("sequelize");

const { DataTypes } = require(sequelize);

const JobApplications = sequelize.define(
  "jobApplications",
  {
    id: {
      types: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    job_id: {
      id: DataTypes.INTEGER,
      allowNull: false,
    },
    applicant_id: {
      id: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: "jobApplications", timestamps: true }
);
JobApps.belongsTo(jobs, { foreignKey: "job_id" });
JobApps.belongsTo(seekers, { foreignKey: "applicant_id" });

module.exports = JobApplications;
