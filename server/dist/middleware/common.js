"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHelmet = exports.handleLogger = exports.handleCompression = exports.handleBodyRequestParsing = exports.handleCors = void 0;
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const pino_http_1 = __importDefault(require("pino-http"));
const handleCors = (app) => app.use(cors_1.default({ credentials: true, origin: true }));
exports.handleCors = handleCors;
const handleBodyRequestParsing = (app) => {
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.json());
};
exports.handleBodyRequestParsing = handleBodyRequestParsing;
const handleCompression = (app) => {
    app.use(compression_1.default());
};
exports.handleCompression = handleCompression;
const handleLogger = (app) => {
    app.use(pino_http_1.default({
        genReqId: function (req) {
            return req.id;
        },
        useLevel: "trace",
    }));
};
exports.handleLogger = handleLogger;
const handleHelmet = (app) => {
    app.use(helmet_1.default());
};
exports.handleHelmet = handleHelmet;
//# sourceMappingURL=common.js.map