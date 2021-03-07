"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const SuperHero_1 = require("../../entity/SuperHero");
// burger.factory.ts
typeorm_seeding_1.define(SuperHero_1.SuperHero, (faker) => {
    const super_hero = new SuperHero_1.SuperHero();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const age = faker.random.number();
    super_hero.firstName = firstName;
    super_hero.lastName = lastName;
    super_hero.age = age;
    return super_hero;
});
//# sourceMappingURL=superhero.factory.js.map