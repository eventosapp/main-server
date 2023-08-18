var express = require("express");
const { Proyecto } = require("../db/main/proyecto");
const { UsuarioEnProyecto } = require("../db/main/usuario_en_proyecto");
var router = express.Router();

const { __PROJECT_ID__ } = require("../app/constants/main.constants");
const { Validate } = require("./../classes/validate.class");

router.post("/verificar-usuario-proyecto", async function (req, res, next) {
  const { user_id } = req.body;
  try {
    const validate = new Validate();
    validate.params = [
      { value: user_id, name: "Id del usuario", validations: ["NOT_NULL"] },
    ];
    validate.isValid();
  } catch ({ name, message }) {
    res.status(400).send({ mensaje: message });
    return;
  }

  try {
    const proyecto = new UsuarioEnProyecto();
    proyecto.model().then((model) => {
      model
        .findOne({
          where: {
            user_id,
            proyecto_id: __PROJECT_ID__,
          },
        })
        .then((proyecto) => {
          res.send({
            mensaje: "Usuario verificado con exito",
            datos: proyecto !== null,
          });
        });
    });
  } catch (error) {
    res.status(500).send("Error en el sistema " + error);
  }
});

module.exports = router;
