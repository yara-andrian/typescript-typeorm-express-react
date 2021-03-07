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
exports.SuperHeroRepo = void 0;
const BaseRepository_1 = require("./base/BaseRepository");
// import { Spartan } from "../entities/Spartan";
const SuperHero_1 = require("../entity/SuperHero");
class SuperHeroRepo extends BaseRepository_1.BaseRepository {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const superHeroRepository = this.repository;
            const user = new SuperHero_1.SuperHero();
            try {
                yield superHeroRepository.save(Object.assign(Object.assign({}, user), payload));
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
}
exports.SuperHeroRepo = SuperHeroRepo;
//# sourceMappingURL=SpartanRepo.js.map