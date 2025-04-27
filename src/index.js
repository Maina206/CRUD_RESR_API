import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import router from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// use our middlewares
app.use(express.json());
app.use(cors());

// Use our routes
app.use("/api", router);

// Error handling middleware
app.use(errorHandling);

// create table before starting server
createUserTable();

// Testing postgres connection
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is : ${result.rows[0].current_database}`);
});

// Server running
app.listen(5001, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
