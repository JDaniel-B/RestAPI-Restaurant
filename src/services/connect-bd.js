import { config } from "dotenv";
config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE } = process.env;

import { createPool } from "mysql2/promise";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  ssl: {
    ca: fs.readFileSync(path.resolve(dirname + "/ca.pem")).toString(),
    rejectUnauthorized: true,
  },
});