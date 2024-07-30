import { BaseEntity } from "./base";

export interface Task extends BaseEntity {
  text: string;
  isChecked: boolean;
}
