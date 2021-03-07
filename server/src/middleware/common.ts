import { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import parser from "body-parser";
import compression from "compression";
import logger from "pino-http";

export const handleCors = (app: Express) =>
  app.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (app: Express) => {
  app.use(parser.urlencoded({ extended: true }));
  app.use(parser.json());
};

export const handleCompression = (app: Express) => {
  app.use(compression());
};

export const handleLogger = (app: Express) => {
  app.use(
    logger({
      genReqId: function (req) {
        return req.id;
      },
      useLevel: "trace",
    })
  );
};

export const handleHelmet = (app: Express) => {
  app.use(helmet());
};
