import { Factory, Seeder } from "typeorm-seeding";
import { SuperHero } from "../../entity/SuperHero";

export class CreateSuperheroSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(SuperHero)().createMany(5);
  }
}
