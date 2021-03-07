import { BaseItem } from "./BaseItem";

export interface Item extends BaseItem {
  id: number;
}

export interface Items {
  [key: number]: Item;
}
