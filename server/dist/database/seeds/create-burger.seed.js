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
exports.CreateBurgerSeed = void 0;
const Burger_1 = require("../../entity/Burger");
class CreateBurgerSeed {
    run(factory) {
        return __awaiter(this, void 0, void 0, function* () {
            yield factory(Burger_1.Burger)().createMany(5);
        });
    }
}
exports.CreateBurgerSeed = CreateBurgerSeed;
//# sourceMappingURL=create-burger.seed.js.map