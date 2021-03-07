import { Burger } from "../entity/Burger";
import { BaseRepository } from "./base/BaseRepository";
// import { Spartan } from "../entities/Spartan";
// import { SuperHero } from "../entity/SuperHero";

export interface IPayload {
  name: string;
  price: number;
  description: string;
}

export class BurgerRepo extends BaseRepository<Burger> {
  async create(payload: IPayload): Promise<boolean> {
    const burgerRepo = this.repository;
    const burger = new Burger();
    try {
      await burgerRepo.save({
        ...burger,
        ...payload,
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  async getList(): Promise<Burger[] | undefined> {
    const burgerRepo = this.repository;
    try {
      return await burgerRepo.find();
    } catch (err) {
      return [];
    }
  }
}
