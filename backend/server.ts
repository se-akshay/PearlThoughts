import dotenv from "dotenv";
import express from "express";

import pool from "./db";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ health: "healthy::working" });
});

// hello api
app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/db-health", async (req, res) => {
  try {
    const result = await pool.query("SELECT 1 AS ok");
    res.json({ ok: result.rows[0]?.ok === 1 });
  } catch (error) {
    res.status(500).json({ ok: false, error: "Database connection failed" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
