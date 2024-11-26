import { ToDoEntity } from "@domain/entities/toDoEntity";

export abstract class IToDoRepository {
  abstract create(toDoDescription: string): Promise<void>;
  abstract findAll(): Promise<ToDoEntity[]>;
}
