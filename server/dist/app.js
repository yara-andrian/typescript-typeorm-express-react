"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("./middleware"));
const utils_1 = require("./utils");
const api_1 = __importDefault(require("./controllers/api"));
const app = express_1.default();
utils_1.applyMiddleware(middleware_1.default, app);
app.use("/api", api_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map