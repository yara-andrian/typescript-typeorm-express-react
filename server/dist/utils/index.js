"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = void 0;
const applyMiddleware = (middlewares, app) => {
    for (const middleware of middlewares) {
        middleware(app);
    }
};
exports.applyMiddleware = applyMiddleware;
//# sourceMappingURL=index.js.map