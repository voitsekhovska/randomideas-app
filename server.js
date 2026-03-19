const express = require("express");
const port = 5000;

const app = express();

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

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

// Get all ideas
app.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    return res.status(404).json({ success: false, error: "Resource not found" });
  }

  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`This server listening on post ${port}`));
