// add middlewares here related to actions

const Actions = require("./actions-model");

function validActionsId() {
  return (req, res, next) => {
    Actions.get(req.params.id).then((act) => {
      if (act) {
        req.act = act;
        next();
      } else {
        res.status(404).json({
          message: "action not found",
        });
      }
    });
  };
}

function validActionPost() {
  return (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({
        message: "missing action data",
      });
    }
    if (!req.body.project_id) {
      return res.status(400).json({
        message: "missing project_id",
      });
    }
    if (!req.body.description || !req.body.notes) {
      return res.status(400).json({
        message: "missing input fields",
      });
    }
    next();
  };

}

module.exports = { validActionPost, validActionsId };
