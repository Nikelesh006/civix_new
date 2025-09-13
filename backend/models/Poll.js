import mongoose from "mongoose";

const pollSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [String],
  votes: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, option: Number }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
  // ...add other fields as needed
});

export default mongoose.model("Poll", pollSchema);

// Example usage (put this in a route/controller to create a poll):
// import Poll from "./models/Poll.js";
// const newPoll = new Poll({
//   question: "Do you support the new park?",
//   options: ["Yes", "No"],
//   createdBy: someUserId
// });
// await newPoll.save();
