const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// Sample queue items
const queueItems = [
        "Task 1 - 2024-09-25T10:00:00Z",
        "Task 2 - 2024-09-25T10:30:00Z",
        "Task 3 - 2024-09-25T11:00:00Z",
        "Task 4 - 2024-09-25T11:30:00Z",
        "Task 5 - 2024-09-25T12:00:00Z",
        "Task 6 - 2024-09-25T12:30:00Z",
        "Task 7 - 2024-09-25T13:00:00Z",
        "Task 8 - 2024-09-25T13:30:00Z",
        "Task 9 - 2024-09-25T14:00:00Z",
        "Task 10 - 2024-09-25T14:30:00Z",
        "Task 11 - 2024-09-25T15:00:00Z",
    ];

// API endpoint
app.get('/queue-items', (req, res) => {
    const key = req.query.key; // Get the key from query parameters

    // You can add key validation here if needed

    // Respond with the queue items
    res.json({ items: queueItems });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
