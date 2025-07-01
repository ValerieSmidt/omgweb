const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Enable CORS for cross-origin requests
app.use(cors());

// Endpoint to fetch Discord events
app.get('/api/events', async (req, res) => {
  try {
    const response = await axios.get('https://discord.com/api/v10/guilds/1389227403347497102/scheduled-events', {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`, // Use environment variable for security
      },
    });
    res.json(response.data); // Send the events data to the frontend
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});