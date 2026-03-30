const express = require("express");
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: "Practice self-kindness and spend 30 minutes doing something you love today.",
    tag: "Kindness",
    username: "JaneEyre",
    date: "2026-03-19",
  },
  {
    id: 2,
    text: "Write your partner a list of things you love about them.",
    tag: "Relationship",
    username: "JamesJoyce",
    date: "2023-05-09",
  },
  {
    id: 3,
    text: "Put your phone away while in the company of others.",
    tag: "Relationship",
    username: "VirginiaWolf",
    date: "2025-09-11",
  },
  {
    id: 4,
    text: "Purchase extra dog or cat food and bring it to an animal shelter.",
    tag: "Kindness",
    username: "JaneEyre",
    date: "2026-03-19",
  },
  {
    id: 5,
    text: "Donate old towels or blankets to an animal shelter.",
    tag: "Recycling",
    username: "JamesJoyce",
    date: "2026-01-01",
  },
];

// Get all ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

//Get single idea by id
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }

  res.json({ success: true, data: idea });
});

// Add an idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };
  ideas.push(idea);

  res.json({ success: true, data: idea });
});

// Update idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }

  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json({ success: true, data: idea });
});

// Delete idea
router.delete("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }

  const index = ideas.indexOf(idea);
  ideas.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;
