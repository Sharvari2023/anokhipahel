import express from "express";
import { getSchedules, createSchedule, deleteSchedule } from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/schedules", getSchedules);
router.post("/schedules", createSchedule);
router.delete("/schedules/:id", deleteSchedule);

export default router;