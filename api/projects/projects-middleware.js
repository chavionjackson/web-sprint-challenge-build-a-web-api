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

module.exports = { validProjectId };
