import { Express } from "express";
import * as swaggerUI from "swagger-ui-express";
import path from "path";
import { readFileSync } from "fs";
import * as YAML from "js-yaml";
const OpenApiValidator = require("express-openapi-validator");

function loadDocumentSync(file: string): any {
  return YAML.load(readFileSync(file, "utf8"));
}

export const initSwaggerMiddleware = async function (app: Express) {
  const swaggerDoc = loadDocumentSync(
    path.join(__dirname, "../definition/swagger.yaml")
  );
  if (process.env.NODE_ENV !== "production") {
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  }

  app.use(
    OpenApiValidator.middleware({
      apiSpec: swaggerDoc,
      validateRequests: true, // (default)
      validateResponses: true, // false by default,
      validateFormats: "full",
    })
  );
};
