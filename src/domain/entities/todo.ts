import { BaseEntity } from "./base";

export interface Todo extends BaseEntity {
  text: string;
  checked: boolean;
}
