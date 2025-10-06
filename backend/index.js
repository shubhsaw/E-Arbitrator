const express = require("express");
const mongoose = require("mongoose");
const Client = require("./userModel/ClientModel.js");
const Arbitrator = require("./userModel/ArbitratorModel.js");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.ClusterShubham)
    .then(() => console.log("MongoDB connected"))
    .catch(() => console.log("MongoDB connection failed"));

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Helper function to hash password
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// ------------------ Client Registration ------------------
app.post("/Register-client", async (req, res) => {
    try {
        const { fullName, email, password, mobileNo, companyName, governmentId } = req.body;

        const hashedPassword = await hashPassword(password);

        const user = new Client({
            fullName,
            email,
            password: hashedPassword,
            mobileNo,
            companyName,
            governmentId
        });

        await user.save();

        const token = jwt.sign({ email, id: user._id }, process.env.jwtseceretkey);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.status(200).json({ msg: "success" });

    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
});

// ------------------ Arbitrator Registration ------------------
app.post("/Register-arbitrator", async (req, res) => {
    try {
        const { fullName, email, password, mobileNo, companyName, profession, governmentId } = req.body;

        const hashedPassword = await hashPassword(password);

        const user = new Arbitrator({
            fullName,
            email,
            password: hashedPassword,
            mobileNo,
            companyName,
            profession,
            governmentId
        });

        await user.save();

        const token = jwt.sign({ email, id: user._id }, process.env.jwtseceretkey);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ msg: "success" });

    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
