require('dotenv').config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const connectDB = require("./config/db");
const { Server } = require("socket.io");


const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {origin: "http://localhost:5173"}
});


// Socket.IO
require('./socket')(io);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// Connect to MongoDB
connectDB().catch(err => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
});
// Start the server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

