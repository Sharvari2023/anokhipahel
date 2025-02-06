import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    subject: {
        type: String,
        required: true
    },
    schedules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Schedule" }]
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
export default Teacher;