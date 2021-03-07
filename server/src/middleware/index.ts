import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleLogger,
  handleHelmet,
} from "./common";

import { initSwaggerMiddleware } from "./swagger";

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleLogger,
  handleHelmet,
  initSwaggerMiddleware,
];
