"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const Burger_1 = require("../../entity/Burger");
// burger.factory.ts
typeorm_seeding_1.define(Burger_1.Burger, (faker) => {
    const burger = new Burger_1.Burger();
    const name = `${faker.random.word()} Burger`;
    const price = faker.commerce.price();
    const description = faker.lorem.paragraph();
    const image = faker.image.food();
    burger.name = name;
    burger.price = parseFloat(price);
    burger.description = description;
    burger.image = image;
    return burger;
});
//# sourceMappingURL=burger.factory.js.map