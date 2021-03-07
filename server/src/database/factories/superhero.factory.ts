import { define } from "typeorm-seeding";
import * as Faker from "faker";
import { SuperHero } from "../../entity/SuperHero";

// burger.factory.ts
define(SuperHero, (faker: typeof Faker) => {
  const super_hero = new SuperHero();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const age = faker.random.number();

  super_hero.firstName = firstName;
  super_hero.lastName = lastName;
  super_hero.age = age;

  return super_hero;
});
