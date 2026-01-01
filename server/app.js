const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/ai.routes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",          
      "http://localhost:3000",          
      "https://ai-student-assistant.vercel.app",
    ],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("AI Student Assistant Backend is running");
});

module.exports = app;
