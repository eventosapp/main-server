const { DataTypes } = require("sequelize");
const { db } = require("../db");
class UsuarioEnProyecto extends db {
  constructor() {
    super();
  }

  async model() {
    const connection = await super.connection();

    const usuarioEnProyectoModel = connection.define(
      "usuario_en_proyecto",
      {
        // Model attributes are defined here
        proyecto_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          validate: {
            isNumeric: true,
          },
        },
        user_id: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        activo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
      },
      {
        schema: "main",
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
      }
    );
    return usuarioEnProyectoModel;
  }

  async getAll() {
    const usuarioEnProyectoModel = await this.model();
    return await usuarioEnProyectoModel.findAll();
  }
}

module.exports = { UsuarioEnProyecto };
