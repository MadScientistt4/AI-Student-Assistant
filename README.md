# AI-Powered Student Assistant (MERN + Gemini)
---

## 🌐 Deployed Live Links

Frontend (Vercel):
https://ai-student-assistant.vercel.app

Backend (Render):
https://ai-student-assistant-f0uh.onrender.com/

---
## 📌 Project Overview

The AI-Powered Student Assistant is a MERN-based web application that allows users to input text or questions, select a task type, and receive AI-generated responses.

The project demonstrates:
- Integration of a Large Language Model (LLM) into a MERN stack application
- Use of structured prompt engineering to control AI output
- Clean frontend–backend separation
- Secure handling of API keys using environment variables

The application supports multiple AI-assisted tasks commonly used by students, such as explanations, summarization, and question generation.

---

## ✨ Features

- Text input for user queries
- Task mode selection:
  - Explain a concept
  - Generate multiple-choice questions (MCQs)
  - Summarize text
  - Improve writing quality
- AI-generated responses using Google Gemini
- Loading indicator during AI processing
- Error handling for invalid requests
- Clean and minimal UI built with React + Tailwind CSS

---

## 🧱 Tech Stack

Frontend:
- React (Vite)
- Tailwind CSS
- JavaScript

Backend:
- Node.js
- Express.js
- Google Gemini API

Deployment:
- Backend: Render
- Frontend: Vercel

---

## ⚙️ Setup and Run Instructions

### Prerequisites

- Node.js (v18 or above recommended)
- npm
- Google Gemini API key

---

### 🔧 Backend Setup

1. Navigate to the backend directory

```bash
cd server
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file inside the `server/` directory

```env
AI_API_KEY=your_gemini_api_key_here
PORT=5000
```

4. Start the backend server

```bash
npm run dev
```

or

```bash
npm start
```

The backend will run at:

```
http://localhost:5000
```

---

### 🎨 Frontend Setup

1. Navigate to the frontend directory

```bash
cd frontend/client
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file inside `frontend/client/`

```env
VITE_BACKEND_URL=http://localhost:5000
```
or 
```env
VITE_BACKEND_URL=https://ai-student-assistant-f0uh.onrender.com/
```

4. Start the frontend application

```bash
npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

---

## 🔗 API Endpoint

Endpoint:

```
POST /api/ai/generate
```

Sample request body:

```json
{
  "prompt": "Explain JavaScript closures",
  "mode": "explain"
}
```

Sample response:

```json
{
  "response": "A closure in JavaScript allows a function to access variables from its outer scope..."
}
```

---

## 🤖 AI Integration Explanation

This project integrates the Google Gemini API on the backend.

Key points:
- All AI calls are handled in a dedicated service file (`services/ai.service.js`)
- The frontend never communicates directly with the AI provider
- The backend acts as a secure middleware layer
- The Gemini API key is stored using environment variables and is never exposed to the client

This architecture ensures better security, maintainability, and control over AI behavior.

---

## 🧠 Prompt Design Approach

Raw user input is never sent directly to the AI model.  
Instead, structured prompts are dynamically constructed based on the selected task mode.

Each prompt includes:

1. Role Definition  
   Defines how the AI should behave  
   Example:  
   "You are an experienced university instructor."

2. Clear Task Context  
   Explicitly states what the AI needs to do (explain, summarize, generate MCQs, etc.)

3. Explicit Constraints  
   - Word limits
   - Formatting rules
   - Instructions to avoid guessing or hallucination
   - Directions to respond with uncertainty if information is insufficient

4. Output Formatting Instructions  
   - MCQ generation enforces a strict JSON structure
   - Each question includes options and a correct answer

Different task modes dynamically switch between predefined prompt templates.  
This ensures consistent, predictable, and evaluation-friendly AI outputs.



