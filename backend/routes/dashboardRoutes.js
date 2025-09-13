import express from "express";
// import your models
import User from "../models/User.js";
import Petition from "../models/Petition.js";
import Poll from "../models/Poll.js";

const router = express.Router();

// GET /api/dashboard/:userId
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    // Dashboard stats
    const myPetitions = await Petition.countDocuments({ createdBy: userId });
    const successfulPetitions = await Petition.countDocuments({ createdBy: userId, status: "successful" });
    const pollsCreated = await Poll.countDocuments({ createdBy: userId });

    // Active petitions near user (by city)
    const activePetitions = await Petition.find({
      city: user.city,
      status: "active"
    });

    // Categories (static for now)
    const categories = [
      "Environment",
      "Infrastructure",
      "Education",
      "Public Safety",
      "Transportation",
      "Healthcare",
      "Housing"
    ];

    res.json({
      user: {
        name: user.name,
        email: user.email,
        city: user.city,
        role: user.role,
        verified: user.verified
      },
      stats: {
        myPetitions,
        successfulPetitions,
        pollsCreated
      },
      activePetitions,
      categories
    });
  } catch (err) {
    res.status(500).json({ error: "Dashboard data fetch failed" });
  }
});

export default router;
