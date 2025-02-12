import Schedule from "../models/Schedule.js";
import Teacher from "../models/Teacher.js";


//getting all schedule(crud)
export const getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find().populate("teacher", "name email subject");
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//create schedule
export const createSchedule = async (req, res) => {
    try {
        console.log("request recieved", req.body);
        const { className, subject, teacherId, day, time } = req.body;
        const teacher = await Teacher.findById(teacherId);
        if (!teacher) {
            console.error("Teacher not found:", teacherId);
            return res.status(404).json({ message: "Teacher not found" });
        }
        console.log(teacher);

        console.log("✅ Creating schedule...");
        const schedule = new Schedule({
            className,
            subject,
            teacher: teacherId,
            day,
            time
        });
        console.log("🔄 Attempting to save schedule...");
        await schedule.save();
        console.log("✅ Schedule saved successfully:", schedule);

        teacher.schedules.push(schedule._id);
        await teacher.save();

        res.status(201).json(schedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete
export const deleteSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        if (!schedule) return res.status(404).json({ message: "schedule not found" });

        await Teacher.findByIdAndUpdate(schedule.teacher, { $pull: { schedules: schedule._id } });
        await schedule.deleteOne();
        res.status(200).json({ message: "Schedule deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}