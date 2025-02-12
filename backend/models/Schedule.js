import mongoose from "mongoose";
import Teacher from "./Teacher.js";

const ScheduleSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId, ref: "Teacher",
        required: true
    },
    day: {
        type: String,
        required: true,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    time: {
        type: String,
        required: true,
    }
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);
export default Schedule;