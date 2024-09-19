import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Use the uuid package to generate UUIDs

// Define the team schema
export const teamSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4, // Automatically generates a UUID when creating a new team
    },
    title: {
      type: String,
      required: true, // title is required
    },
    description: {
      type: String,
      required: true, // description is required
    },
    created_at: {
      type: Date,
      default: Date.now, // Automatically sets created_at to the current date
    },
    updated_at: {
      type: Date,
      default: Date.now, // Automatically sets updated_at to the current date
    },
    deleted_at: {
      type: Date, // Field to store deletion timestamp (optional)
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }, // Enable automatic handling of timestamps
  }
);

// Export the team model
export const teamModel = mongoose.model("Team", teamSchema);
