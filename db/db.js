const { Sequelize } = require("sequelize");
class db {
  constructor() {}
  async connection() {
    const sequelize = new Sequelize({
      database: "eventosapp",
      username: "postgres",
      password: "eventosapp",
      host: "database-eventosapp.cgm72eza25xd.us-east-1.rds.amazonaws.com",
      port: 5432,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false, // This line will fix new error
        },
      },
    });
    await sequelize.authenticate();
    return sequelize;
  }
}

module.exports = { db };
