const express = require("express");
const router = express.Router();
const { generateAI } = require("../controllers/ai.controller");

router.post("/generate", generateAI);

module.exports = router;
