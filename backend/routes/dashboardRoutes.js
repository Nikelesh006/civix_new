import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getStats, getActivePetitions } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/stats", protect, getStats);
router.get("/petitions", protect, getActivePetitions);

export default router;
