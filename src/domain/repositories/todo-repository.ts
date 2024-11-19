import { ToDo } from "@domain/entities/todo";

export abstract class ToDoRepository {
  abstract create(toDo: ToDo): Promise<ToDo>;
  abstract findAll(filterText?: string): Promise<ToDo[]>;
  abstract findById(id: number): Promise<ToDo | null>;
  abstract update(toDo: ToDo): Promise<ToDo>;
}
