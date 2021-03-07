import { BaseRepository } from "./base/BaseRepository";
// import { Spartan } from "../entities/Spartan";
import { SuperHero } from "../entity/SuperHero";

export interface IPayload {
  firstName: string;
  lastName: string;
  age: number;
}

export class SuperHeroRepo extends BaseRepository<SuperHero> {
  async create(payload: IPayload): Promise<boolean> {
    const superHeroRepository = this.repository;
    const user = new SuperHero();
    try {
      await superHeroRepository.save({
        ...user,
        ...payload,
      });
      return true;
    } catch (err) {
      return false;
    }
  }
}
