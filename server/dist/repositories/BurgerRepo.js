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
exports.BurgerRepo = void 0;
const Burger_1 = require("../entity/Burger");
const BaseRepository_1 = require("./base/BaseRepository");
class BurgerRepo extends BaseRepository_1.BaseRepository {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const burgerRepo = this.repository;
            const burger = new Burger_1.Burger();
            try {
                yield burgerRepo.save(Object.assign(Object.assign({}, burger), payload));
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    getList() {
        return __awaiter(this, void 0, void 0, function* () {
            const burgerRepo = this.repository;
            try {
                return yield burgerRepo.find();
            }
            catch (err) {
                return [];
            }
        });
    }
}
exports.BurgerRepo = BurgerRepo;
//# sourceMappingURL=BurgerRepo.js.map