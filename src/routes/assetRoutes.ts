import express from "express";
import {
  getAllAsset,
  addAsset,
  updateAsset,
  deleteAsset,
} from "../controllers/assetController";

const assetRouter = express.Router();

assetRouter.get("/get-all-asset", getAllAsset);
assetRouter.post("/addAsset", addAsset);
assetRouter.put("/updateAsset/:id", updateAsset);
assetRouter.delete("/deleteAsset/:id", deleteAsset);

export default assetRouter;
