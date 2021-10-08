// Write your "projects" router here!
const express = require("express");
const router = express.Router();
const projects = require('./projects-model')

router.get("/", (req, res, next) => {
  projects
    .get()
    .then((pro) => {
      res.status(200).json(pro);
    })
    .catch(next);
});

module.exports = router;
