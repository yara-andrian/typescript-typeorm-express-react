import { Express } from "express"

type Wrapper = ((app: Express) => void)

export const applyMiddleware = (middlewares: Wrapper[], app: Express) => {
  for (const middleware of middlewares){
    middleware(app)
  }
}