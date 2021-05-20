const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = (process.env.CLEARDB_DATABASE_URL) ? 
    new Sequelize(process.env.CLEARDB_DATABASE_URL, {logging: false}) : 
    new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.questions = require("./question.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);


module.exports = db;