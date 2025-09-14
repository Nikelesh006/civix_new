import Petition from "../models/Petition.js";

// Get Stats
export const getStats = async (req, res) => {
  try {
    const totalPetitions = await Petition.countDocuments({ createdBy: req.user._id });
    const successfulPetitions = await Petition.countDocuments({
      createdBy: req.user._id,
      status: "Successful",
    });
    const pollsCreated = 0; // later can be extended

    res.json({
      totalPetitions,
      successfulPetitions,
      pollsCreated,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching stats", error: err.message });
  }
};

// Get Active Petitions
export const getActivePetitions = async (req, res) => {
  try {
    const petitions = await Petition.find({ status: "Active" }).limit(10);
    res.json(petitions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching petitions", error: err.message });
  }
};
