import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Navbar Section */}
      <header className="navbar">
        {/* Logo and Title */}
        <div className="logo-container">
          <img
            src="/assets/image.png"
            alt="Anokhi Pahel - Sunehere Sapno Ka Kal"
            className="logo"
          />
          <h1 className="title">Anokhi Pahel</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto space-y-6 mt-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

