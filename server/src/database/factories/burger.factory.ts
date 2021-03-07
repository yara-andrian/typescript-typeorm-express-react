import { define } from "typeorm-seeding";
import { Burger } from "../../entity/Burger";
import * as Faker from "faker";

// burger.factory.ts
define(Burger, (faker: typeof Faker) => {
  const burger = new Burger();
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
