import express from "express";

import dataBaseConnection from "./infra/database/DataBaseConnection";
import routesMapped from "./presentation/routes";
import { configsExpress } from "./shared/config/ExpressDefaultConfigs";
import LogRoutersRegistered from "./shared/utils/LogRoutersRegistered";

const app = express();

configsExpress.forEach((config) => {
  app.use(config);
});

app.use(routesMapped);

if (Boolean(process.env.DEBUG_MODE)) {
  LogRoutersRegistered(app);
}

const PORT = process.env.SERVER_PORT;

dataBaseConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log("👻 Server is running on port " + PORT);
    });
  })
  .catch((err) => {
    console.log("Error on start server");
    console.error(err);
  });
