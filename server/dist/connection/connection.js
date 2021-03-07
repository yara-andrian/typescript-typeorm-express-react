"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const SuperHero_1 = require("../entity/SuperHero");
const Burger_1 = require("../entity/Burger");
exports.connection = typeorm_1.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [SuperHero_1.SuperHero, Burger_1.Burger],
    synchronize: true,
    logging: false,
});
//# sourceMappingURL=connection.js.map