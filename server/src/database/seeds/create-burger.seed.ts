import { Factory, Seeder } from "typeorm-seeding";
import { Burger } from "../../entity/Burger";

export class CreateBurgerSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Burger)().createMany(5);
  }
}
