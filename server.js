require("dotenv").config();
const app = require("./app");
const { appConfig, dbConfig } = require("./config");
const connectDb = require("./mongo/startMongo");

async function initApp(appConfig, dbConfig) {
  try {
    await connectDb(dbConfig);
    app.listen(appConfig.port, () =>
      console.log(`listen on port ${appConfig.port}`)
    );
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

initApp (appConfig, dbConfig)
