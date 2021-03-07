import * as dotenv from "dotenv";
import { Connection } from "typeorm";
import app from "./app";
import { connection } from "./connection/connection";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const port = process.env.PORT || 3000;

connection
  .then((_connection: Connection) => {
    app.listen(port, () => {
      console.log(`Example app starts on PORT: ${port}`);
    });
  })
  .catch((err: Error) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
