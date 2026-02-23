import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = await mysql.createConnection({
  host:process.env.HOST,
  user:"root",
  password:"4521",
  database:process.env.DB,
  port:3306
});

export default db;
