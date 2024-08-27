import { ToDo } from "@domain/entities/to-do";

export abstract class ToDoRepository {
  abstract create(text: string): Promise<void>;
  abstract findAll(): Promise<ToDo[]>;
}
