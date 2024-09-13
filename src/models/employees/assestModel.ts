import mongoose from "mongoose";

const assestSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: Number, required: true },
  description: { type: String, required: true },
  assignee: { type: String, required: true },
  created_by: { type: String, required: true },
  assets_type: { type: String, required: true },
  attachment: { type: String, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  deleted_at: { type: Date, required: true },
});
module.exports = mongoose.model("assest", assestSchema);
