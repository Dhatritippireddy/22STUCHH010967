// src/components/ShortenerForm.js

import React from "react";
import { TextField, Button, Grid } from "@mui/material";

const ShortenerForm = ({ urls, handleChange, handleAddUrl, handleRemoveUrl, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
      {urls.map((urlData, index) => (
        <Grid item xs={12} key={index}>
          <TextField
            fullWidth
            label="Original URL"
            name="url"
            value={urlData.url}
            onChange={(event) => handleChange(index, event)}
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Validity (minutes)"
            name="validity"
            value={urlData.validity}
            onChange={(event) => handleChange(index, event)}
            type="number"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Shortcode (Optional)"
            name="shortcode"
            value={urlData.shortcode}
            onChange={(event) => handleChange(index, event)}
            variant="outlined"
          />
          <Button onClick={() => handleRemoveUrl(index)} color="secondary">
            Remove
          </Button>
        </Grid>
      ))}
      <Button variant="contained" color="primary" onClick={handleAddUrl} style={{ marginTop: 20 }}>
        Add Another URL
      </Button>
      <Button variant="contained" color="success" onClick={handleSubmit} style={{ marginTop: 20, marginLeft: 10 }}>
        Shorten URLs
      </Button>
    </Grid>
  );
};

export default ShortenerForm;
