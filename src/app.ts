import express from "express";

import dataBaseConnection from "./infra/database/DataBaseConnection";
import routes from "./presentation/routes";
import { configsExpress } from "./shared/config/ExpressDefaultConfigs";
import logger from "./shared/services/Logger";

const app = express();

configsExpress.forEach((config) => {
  app.use(config);
});

app.use(routes);

const PORT = process.env.SERVER_PORT;

dataBaseConnection().then(() => {
  app.listen(PORT, () => {
    logger.log("👻 Servidor rodando na porta: " + PORT);
  });
})