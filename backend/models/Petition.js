import mongoose from "mongoose";

const petitionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  city: String,
  status: { type: String, default: "active" }, // "active", "successful", etc.
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
  // ...add other fields as needed
});

export default mongoose.model("Petition", petitionSchema);
