import { Request, Response } from "express";
import { assetModel } from "../models/assetModel";
import { assetZodSchema } from "../zod/zodSchema";
import { assetSchema } from "../schema/asset";
import { string } from "zod";

export const getAllAsset = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await assetModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addAsset = async (req: Request, res: Response) => {
  const result = assetZodSchema.safeParse(req.body);
  console.log(result.data);
  if (!result.success) {
    return res.status(400).json(result.error.issues);
  }
  const emp = new assetModel(result.data);

  try {
    const a1 = await emp.save();
    res.json(a1);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
};

export const updateAsset = async (req: Request, res: Response) => {
  try {
    const result = assetZodSchema.parse(req.body);
    const { name, description, type, serial_no } = req.body;

    const updatedAsset = await assetModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        type,
        serial_no,
      },
      { new: true } // Return the updated document
    );

    if (!updatedAsset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    res.json(updatedAsset);
  } catch (err) {
    console.error(err); // Log error for debugging
    if (err instanceof Error)
      res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteAsset = async (req: Request, res: Response) => {
  try {
    // Find the asset by ID and delete it
    const deletedAsset = await assetModel.findByIdAndDelete(req.params.id);

    // If the asset is not found, return a 404 error
    if (!deletedAsset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    // Respond with a success message
    res.json({ message: "Asset deleted successfully", asset: deletedAsset });
  } catch (err) {
    // Handle any server errors
    res.status(500).json({ message: "Server error", error: err });
  }
};
