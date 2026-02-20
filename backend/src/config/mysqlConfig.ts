import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const db = db.createConnection({
  host:process.env.HOST,
  user:process.env.USERNAME,
  password:process.env.PASSWORD,
  database:process.env.DB
});

export default db;
