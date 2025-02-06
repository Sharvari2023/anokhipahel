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
        const { className, subject, teacherid, day, time } = req.body;
        const teacher = await Teacher.findById(teacherid);
        if (!teacher) return res.status(404).json({ message: "Teacher not found" });

        const schedule = new Schedule({ className, subject, teacher: teacherid, day, time });
        await schedule.save();

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