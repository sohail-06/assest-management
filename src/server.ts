import express, { Request, Response, NextFunction } from "express";
import dbConnection from "./config/dbConnection";
import assetRouter from "./routes/asset/assetRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();

app.use(express.json());
app.use(assetRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
    success: false,
  });
  console.error(err);
});
