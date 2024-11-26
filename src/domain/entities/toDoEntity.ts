import { BaseEntity } from "./base";

export interface ToDoEntity extends BaseEntity {
  toDoDescription: string;
}
