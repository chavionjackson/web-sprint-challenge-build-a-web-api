// add middlewares here related to projects

const projects = require("./projects-model");

function validProjectId() {
  return (req, res, next) => {
    projects.get(req.params.id).then((pro) => {
      if (pro) {
        req.pro = pro;
        next();
      } else {
        res.status(404).json({
          message: "project not found",
        });
      }
    });
  };
}

function validProPost() {
  return (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({
        message: "missing project data",
      });
    }
    if (!req.body.name || !req.body.description) {
      return res.status(400).json({
        message: "missing required data",
      });
    }
    next();
  };
}

module.exports = { validProjectId, validProPost };
