import { Router, Request, Response } from "express";
import burgerController from "./burger";

const router = Router();

export const hello = (req: Request, res: Response): void => {
  const name = req.query.greeting || "stranger";
  console.log(name);
  res.status(200).send({ msg: `Hello, ${name}!` });
};

router.get("/hello", hello);
/**
 * List of API examples.
 * @route GET /api
 */
router.get("/hi", (req: Request, res: Response) => {
  res.json("hi there");
});

router.get("/ping", (_, res: Response) => {
  res.send("pang");
});

router.use("/burger", burgerController);

export default router;
