// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";  // Import the ShortenerPage
import StatsPage from "./pages/StatsPage";  // Import the StatsPage

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the URL Shortener page */}
        <Route path="/" element={<ShortenerPage />} />
        
        {/* Route for the URL Stats page */}
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
