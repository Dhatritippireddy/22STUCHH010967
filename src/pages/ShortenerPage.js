// src/pages/ShortenerPage.js

import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import ShortenerForm from "../components/ShortenerForm";  // Import the ShortenerForm
import axios from "axios";
import logger from "../utils/logger";

const ShortenerPage = () => {
  const [urls, setUrls] = useState([{ url: "", validity: 30, shortcode: "" }]);
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleChange = (index, event) => {
    const newUrls = [...urls];
    newUrls[index][event.target.name] = event.target.value;
    setUrls(newUrls);
  };

  const handleAddUrl = () => {
    setUrls([...urls, { url: "", validity: 30, shortcode: "" }]);
  };

  const handleRemoveUrl = (index) => {
    const newUrls = [...urls];
    newUrls.splice(index, 1);
    setUrls(newUrls);
  };

  const handleSubmit = async () => {
    try {
      const responses = await Promise.all(
        urls.map((urlData) =>
          axios.post("http://localhost:PORT/shorturls", urlData)  // Replace with your backend URL
        )
      );
      setShortenedUrls(responses.map((response) => response.data));
      logger("Shortened URLs created", responses);
    } catch (error) {
      logger("Error creating shortened URLs", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      
      {/* Using ShortenerForm component */}
      <ShortenerForm
        urls={urls}
        handleChange={handleChange}
        handleAddUrl={handleAddUrl}
        handleRemoveUrl={handleRemoveUrl}
        handleSubmit={handleSubmit}
      />
      
      {shortenedUrls.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h6">Shortened URLs:</Typography>
          {shortenedUrls.map((urlData, index) => (
            <Typography key={index}>
              {urlData.shortLink} (Expires at: {urlData.expiry})
            </Typography>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ShortenerPage;
