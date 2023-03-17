const sequelize = require("./database");


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
   } catch (error) {
    console.error('Unable to connect to the database:', error);
   }