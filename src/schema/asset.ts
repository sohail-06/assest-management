import mongoose from "mongoose";

// Define the asset schema
export const assetSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignee: { type: String, required: false },
    created_by: { type: String, required: false },
    assets_type: { type: String, required: false },
    attachment: { type: String, required: false },
    status: { type: String, required: false },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }, // Automatically add createdAt and updatedAt fields
  }
);

// Export the asset model
export const assetModel = mongoose.model("Asset", assetSchema);
