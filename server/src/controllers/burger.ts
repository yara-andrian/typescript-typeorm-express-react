import { Router, Request, Response } from "express";
import { getConnection } from "typeorm";
import { BurgerRepo } from "../repositories/BurgerRepo";

import { Burger } from "../entity/Burger";

const router = Router({ mergeParams: true });

const getList = async (req: Request, res: Response): Promise<void> => {
  const repo = new BurgerRepo(getConnection(), Burger);
  try {
    const response = await repo.getList();
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};

router.get("/", getList);

export default router;
