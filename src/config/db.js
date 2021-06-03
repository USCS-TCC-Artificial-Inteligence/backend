import pgp from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();

const db = pgp()({
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER, // any admin user
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
});

export default db;
