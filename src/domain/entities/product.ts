import { BaseEntity } from "./base";

export interface Product extends BaseEntity {
  name: string;
  price: number;
  ownerId: string;
}
