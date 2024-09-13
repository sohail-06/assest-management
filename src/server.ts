import express from "express";
import dbConnection from "./config/dbConnection";

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
