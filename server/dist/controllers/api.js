"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const express_1 = require("express");
const burger_1 = __importDefault(require("./burger"));
const router = express_1.Router();
const hello = (req, res) => {
    const name = req.query.greeting || "stranger";
    console.log(name);
    res.status(200).send({ msg: `Hello, ${name}!` });
};
exports.hello = hello;
router.get("/hello", exports.hello);
/**
 * List of API examples.
 * @route GET /api
 */
router.get("/hi", (req, res) => {
    res.json("hi there");
});
router.get("/ping", (_, res) => {
    res.send("pang");
});
router.use("/burger", burger_1.default);
exports.default = router;
//# sourceMappingURL=api.js.map