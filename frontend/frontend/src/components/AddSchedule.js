import React, { useState } from "react";
import axios from "axios";
import "./AddSchedule.css"; // Import the CSS file

const AddSchedule = ({ fetchSchedules }) => {
    const [formData, setFormData] = useState({
        className: "",
        subject: "",
        teacherId: "",
        day: "Monday",
        time: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/schedules", formData);
            fetchSchedules();
            alert("Schedule added!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="schedule-container">
            <h2 className="schedule-title">Add Schedule</h2>
            <form onSubmit={handleSubmit} className="schedule-form">
                <input name="className" value={formData.className} onChange={handleChange} placeholder="Class Name" className="schedule-input" />
                <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="schedule-input" />
                <input name="teacherId" value={formData.teacherId} onChange={handleChange} placeholder="Teacher ID" className="schedule-input" />
                <select name="day" value={formData.day} onChange={handleChange} className="schedule-select">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
                <input name="time" value={formData.time} onChange={handleChange} placeholder="Time" className="schedule-input" />
                <button type="submit" className="schedule-button">Add Schedule</button>
            </form>
        </div>
    );
};

export default AddSchedule;
