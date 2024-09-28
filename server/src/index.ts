// src/index.ts
import express from "express";
import sequelize from "./config/db";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test the database connection and sync models
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    // Sync the models with the database
    await sequelize.sync();
    console.log("Database synced.");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
