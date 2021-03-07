"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const swagger_1 = require("./swagger");
exports.default = [
    common_1.handleCors,
    common_1.handleBodyRequestParsing,
    common_1.handleCompression,
    common_1.handleLogger,
    common_1.handleHelmet,
    swagger_1.initSwaggerMiddleware,
];
//# sourceMappingURL=index.js.map