// Write your "projects" router here!
const express = require("express");
const { validProjectId } = require("./projects-middleware");
const router = express.Router();
const projects = require("./projects-model");

router.get("/", (req, res, next) => {
  projects
    .get()
    .then((pro) => {
      res.status(200).json(pro);
    })
    .catch(next);
});

router.get("/:id", validProjectId(), (req, res) => {
  res.status(200).json(req.pro);
});

module.exports = router;
