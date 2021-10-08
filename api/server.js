const express = require("express");
const server = express();
const projectsRouter = require("./projects/projects-router");

server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use(express.json());
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went nwrong, please try again!",
  });
});

server.get("/", (req, res) => {
  res.status(200).json({ api: "Hello Chevy!" });
});

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
