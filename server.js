const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Sample tasks
const tasks = [
    { id: 1, title: 'Complete profile', reward: 5 },
    { id: 2, title: 'Watch tutorial', reward: 2 },
    { id: 3, title: 'Refer a friend', reward: 10 }
];

// Route to check server status
app.get('/', (req, res) => {
    res.send('Hello from TaskHub backend!');
});

// Endpoint to get tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
