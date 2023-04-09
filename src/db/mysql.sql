CREATE DATABASE IF NOT EXISTS job_board;

CREATE TABLE IF NOT EXISTS jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(60),
    description TEXT,
    company VARCHAR(60),
    location VARCHAR(60),
    salary INT
);

CREATE TABLE IF NOT EXISTS employers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60),
    email VARCHAR(120),
    password VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS seekers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60),
    email VARCHAR(120),
    password VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS job_apps (
	id INT AUTO_INCREMENT PRIMARY KEY,
    job_id NOT NULL INT,
    applicant_id NOT NULL INT,
    submitted_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (job_id) REFERENCES jobs(id),
    FOREIGN KEY (applicant_id) REFERENCES seekers(id)
);