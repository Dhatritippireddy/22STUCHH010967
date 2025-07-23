// src/pages/StatsPage.js

import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import logger from "../utils/logger";
import StatsViewer from "../components/StatsViewer";  // Import the StatsViewer component

const StatsPage = () => {
  const [shortcode, setShortcode] = useState("");
  const [stats, setStats] = useState(null);

  const handleInputChange = (event) => {
    setShortcode(event.target.value);
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        `http://localhost:PORT/shorturls/${shortcode}`  // Replace with your backend URL
      );
      setStats(response.data);
      logger("Stats fetched successfully", response.data);
    } catch (error) {
      logger("Error fetching stats", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Shortener Statistics
      </Typography>

      <TextField
        label="Enter Shortcode"
        variant="outlined"
        value={shortcode}
        onChange={handleInputChange}
        fullWidth
      />

      <Button
        variant="contained"
        color="primary"
        onClick={fetchStats}
        style={{ marginTop: 20 }}
      >
        Get Stats
      </Button>

      <StatsViewer stats={stats} />
    </Container>
  );
};

export default StatsPage;  // Ensure this is included
