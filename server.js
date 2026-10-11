
const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));

// Limit session creation to reduce accidental or abusive usage.
const sessionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many call attempts. Please try again later." },
});

app.use(express.static(path.join(__dirname, "public")));

app.post("/api/bolna-session", sessionLimiter, async (req, res) => {
  try {
    const apiKey = process.env.BOLNA_API_KEY;
    const agentId = process.env.BOLNA_AGENT_ID;

    if (!apiKey || !agentId) {
      return res.status(500).json({
        error: "Server configuration is incomplete.",
      });
    }

    const response = await fetch(
      "https://api.bolna.ai/web-call/freeswitch-session",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ agent_id: agentId }),
        signal: AbortSignal.timeout(15000),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Bolna session request failed:", response.status);
      return res.status(response.status >= 500 ? 502 : response.status).json({
        error: "Unable to start the voice session.",
      });
    }

    // Return session credentials only to the requesting browser.
    res.set("Cache-Control", "no-store");
    return res.json(data);
  } catch (error) {
    console.error("Session creation failed:", error.message);
    return res.status(502).json({
      error: "Unable to create a voice session.",
    });
  }
});

app.get("/{*splat}", (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ error: "Endpoint not found." });
  }
  return res.sendFile(path.join(__dirname, "public", "index.html"), (err) => {
    if (err) next(err);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Voice demo backend listening on port ${port}`);
});
