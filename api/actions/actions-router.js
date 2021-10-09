// Write your "actions" router here!
const express = require("express");
const { validActionsId, validActionPost } = require("./actions-middlware");
const router = express.Router();
const Actions = require("./actions-model");

//GET ALL PROJECTS
router.get("/", (req, res, next) => {
  Actions.get()
    .then((act) => {
      res.status(200).json(act);
    })
    .catch(next);
});

//GET PROJECT BY ID
router.get("/:id", validActionsId(), (req, res) => {
  res.status(200).json(req.act);
});

//POST NEW PROJECT
router.post("/", validActionPost(), (req, res, next) => {
  Actions.insert(req.body)
    .then((pro) => {
      res.status(201).json(pro);
    })
    .catch(next);
});

//UPDATES POST
router.put("/:id", validActionsId(), validActionPost(), (req, res, next) => {
  Actions.update(req.params.id, req.body)
    .then((act) => {
      if (act) {
        res.status(400).json(act);
      } else {
        res.status(200).json();
      }
    })
    .catch(next);
});

//DELETES POST
router.delete("/:id", validActionsId(), (req, res, next) => {
  Actions.remove(req.params.id)
    .then((act) => {
      if (act) {
        res.status(200).json();
      }
    })
    .catch(next);
});

//GET ACTIONS BY ID
router.get("/:id/actions", validActionsId(), (req, res, next) => {
  Actions.getProjectActions(req.params.id)
    .then((act) => {
      res.status(200).json(act);
    })
    .catch(next);
});

module.exports = router;
