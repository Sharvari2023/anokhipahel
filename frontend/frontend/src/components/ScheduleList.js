import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import "./ScheduleList.css"; // Import the CSS file

const ScheduleList = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        fetchSchedules();
    }, []);

    const fetchSchedules = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/schedules");
            setSchedules(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this schedule?")) {
            try {
                await axios.delete(`http://localhost:5000/api/schedules/${id}`);
                fetchSchedules();
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="schedule-list-container">
            <h2 className="schedule-list-title">Schedules</h2>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Day & Time</th>
                        <th>Teacher</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule) => (
                        <tr key={schedule._id}>
                            <td>{schedule.className}</td>
                            <td>{schedule.subject}</td>
                            <td>{schedule.day} {schedule.time}</td>
                            <td>{schedule.teacher?.name || "Unknown"}</td>
                            <td className="schedule-actions">
                                <button className="edit-btn"><FaEdit /></button>
                                <button className="delete-btn" onClick={() => handleDelete(schedule._id)}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleList;
