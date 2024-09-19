import mongoose from "mongoose";

// Define the asset type schema
export const assetTypeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title is required
    },
    description: {
      type: String,
      required: true, // Description is required
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }, // Automatically add createdAt and updatedAt fields
  }
);

// Export the asset type model
export const assetTypeModel = mongoose.model("AssetType")
