import { BaseEntity } from "./base";

type ToDoProps = {
  toDoDescription: string;
};

export class ToDoEntity extends BaseEntity {
  toDoDescription: string;

  constructor(toDoProps: ToDoProps) {
    super();
    this.toDoDescription = toDoProps.toDoDescription;
  }
}
