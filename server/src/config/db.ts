import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "student-portal",
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  models: [__dirname + "/../models"],
  logging: false,
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
