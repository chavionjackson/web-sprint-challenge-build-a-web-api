// Write your "actions" router here!
const express = require("express");
const router = express.Router();
const actions = require("./actions-model");

router.get("/", (req, res, next) => {
  actions
    .get()
    .then((act) => {
      res.status(200).json(act);
    })
    .catch(next);
});

module.exports = router;
