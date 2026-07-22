import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { env } from "node:process";

dotenv.config({quiet:true});

//@ts-expect-error
const db = await mysql.createConnection({
  host:process.env.HOST,
  user:process.env.USER,
  password:process.env.PASSWORD,
  database:process.env.DB,
  port:process.env.PORT,
});

export default db;
