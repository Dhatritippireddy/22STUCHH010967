// src/components/StatsViewer.js

import React from "react";
import { Typography } from "@mui/material";

const StatsViewer = ({ stats }) => {
  if (!stats) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <Typography variant="h6">Short URL Statistics:</Typography>
      <Typography>Total Clicks: {stats.clicks}</Typography>
      <Typography>Original URL: {stats.originalUrl}</Typography>
      <Typography>Created at: {stats.createdAt}</Typography>
      <Typography>Expiry: {stats.expiry}</Typography>

      <Typography variant="subtitle1">Click Data:</Typography>
      {stats.clickData.map((click, index) => (
        <Typography key={index}>
          {click.timestamp} - {click.referrer} - {click.location}
        </Typography>
      ))}
    </div>
  );
};

export default StatsViewer;
