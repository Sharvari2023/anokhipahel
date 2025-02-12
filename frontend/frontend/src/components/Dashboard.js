import React, { useState } from "react";
import AddSchedule from "./AddSchedule";
import ScheduleList from "./ScheduleList";
import Footer from "./Footer"; // Import Footer
import "./Dashboard.css"; // Import the CSS file for styles

const AnokhiPahelTheme = {
    primary: "#2A4D69", // Button Color
    secondary: "#4B86B4",
    accent: "#63ACE5",
    background: "#F2F2F2",
};

const Dashboard = () => {
    const [view, setView] = useState("home");

    return (
        <div className="dashboard-container">
            {/* Main Content */}
            <div className="dashboard-content">
                {/* Left Side - Dynamic Content */}
                <div className="dashboard-view">
                    {view === "home" && (
                        <div className="dashboard-image">
                            <img src="/assets/ap.png" alt="Anokhi Pahel - Sunehere Sapno Ka Kal" />
                        </div>
                    )}
                    {view === "add" && <AddSchedule fetchSchedules={() => { }} />}
                    {view === "view" && <ScheduleList />}
                </div>

                {/* Right Side - Buttons */}
                <div className="dashboard-options">
                    <button
                        className="dashboard-button"
                        style={{ backgroundColor: AnokhiPahelTheme.primary }}
                        onClick={() => setView("add")}
                    >
                        Add Schedule
                    </button>
                    <button
                        className="dashboard-button"
                        style={{ backgroundColor: AnokhiPahelTheme.secondary }}
                        onClick={() => setView("view")}
                    >
                        Get Schedule
                    </button>
                    <button
                        className="dashboard-button"
                        style={{ backgroundColor: AnokhiPahelTheme.accent }}
                        onClick={() => setView("home")}
                    >
                        Home
                    </button>
                </div>
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default Dashboard;
