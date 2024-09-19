import mongoose from "mongoose";
import { assetSchema } from "../schema/asset";

export const assetModel = mongoose.model("Asset", assetSchema);