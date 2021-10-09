// Write your "projects" router here!
const express = require("express");
const { validProjectId, validProPost } = require("./projects-middleware");
const router = express.Router();
const Projects = require("./projects-model");

//GET ALL PROJECTS
router.get("/", (req, res, next) => {
  Projects.get()
    .then((pro) => {
      res.status(200).json(pro);
    })
    .catch(next);
});

//GET PROJECT BY ID
router.get("/:id", validProjectId(), (req, res) => {
  res.status(200).json(req.pro);
});

//POST NEW PROJECT
router.post("/", validProPost(), (req, res, next) => {
  Projects.insert(req.body)
    .then((pro) => {
      res.status(201).json(pro);
    })
    .catch(next);
});

//UPDATES POST
router.put("/:id", validProjectId(), validProPost(), (req, res, next) => {
  Projects.update(req.params.id, req.body)
    .then((pro) => {
        if(pro) {
            res.status(400).json(pro)
        } else {
            res.status(200).json()
        }
    })
    .catch(next);
});

module.exports = router;
