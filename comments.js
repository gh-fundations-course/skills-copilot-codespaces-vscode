// Create web server
const express = require("express");
const app = express();
const PORT = 3000;

// Create a route for GET request
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});