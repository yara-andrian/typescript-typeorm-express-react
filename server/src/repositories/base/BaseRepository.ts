import { Connection, Repository, EntityTarget, InsertResult } from "typeorm";
import { IWrite } from "../interfaces/IWrite";
import { IRead } from "../interfaces/IRead";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public readonly repository: Repository<T>;

  constructor(connection: Connection, repo: EntityTarget<T>) {
    this.repository = connection.getRepository<T>(repo);
  }

  async create(item: T): Promise<boolean> {
    const result: InsertResult = await this.repository.insert(item);
    return !!result;
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
