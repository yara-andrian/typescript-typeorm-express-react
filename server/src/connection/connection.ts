import { Connection, createConnection } from "typeorm";
import { SuperHero } from "../entity/SuperHero";
import { Burger } from "../entity/Burger";

export const connection: Promise<Connection> = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: [SuperHero, Burger],
  synchronize: true,
  logging: false,
});
