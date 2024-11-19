import { BaseEntity } from "./base";

export interface ToDo extends BaseEntity {
  text: string;
  isCompleted: boolean;
}
