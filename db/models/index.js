'use strict';

import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import { env as _env } from 'process';

import { 
  userModel, accountModel, sessionModel, verificationRequestModel 
} from "@next-auth/sequelize-adapter"
import userModelExtended from './user_extended';


const basename = _basename(__filename);
const env = _env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.ts')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(_env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Initialize the extended model instead and use it normally in your project
db.User = userModelExtended(Model, sequelize, Sequelize);
db.Account = accountModel(Model, sequelize, Sequelize);
db.Session = sessionModel(Model, sequelize, Sequelize);
db.VerificationRequest = verificationRequestModel(Model, sequelize, Sequelize);


export default db;
