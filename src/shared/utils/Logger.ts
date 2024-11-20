import log4js from "log4js";

log4js.configure({
  appenders: {
    console: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '[%d] [%p] [SYSTEM] %m'
      }
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'info' }
  }
});

const logger = log4js.getLogger();

export default logger;