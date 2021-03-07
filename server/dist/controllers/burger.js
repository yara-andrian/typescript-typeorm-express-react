"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const BurgerRepo_1 = require("../repositories/BurgerRepo");
const Burger_1 = require("../entity/Burger");
const router = express_1.Router({ mergeParams: true });
const getList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = new BurgerRepo_1.BurgerRepo(typeorm_1.getConnection(), Burger_1.Burger);
    try {
        const response = yield repo.getList();
        res.json(response);
    }
    catch (err) {
        console.log(err);
    }
});
router.get("/", getList);
exports.default = router;
//# sourceMappingURL=burger.js.map