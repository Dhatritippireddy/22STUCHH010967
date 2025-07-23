// src/utils/logger.js

const logger = (message, data = null) => {
  // Log to console if the backend isn't set up for logging
  console.log(`[LOG] ${message}`, data);

  // If you have a backend logging endpoint, you can send the log to the server
  fetch("http://localhost:PORT/your-logging-endpoint", {  // Replace with your actual logging endpoint
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      data,
      timestamp: new Date().toISOString(),
    }),
  })
    .then(response => response.json())
    .then(data => console.log("Log successfully sent:", data))
    .catch((error) => console.error("Error logging:", error));
};

export default logger;
