import { ToDoEntity } from "@domain/entities/toDoEntity";
import { IToDoRepository } from "@domain/repositories/toDoRepository";

export class ToDoRepositoryStub implements IToDoRepository {
  async create(): Promise<void> {
    return;
  }

  async findAll(): Promise<ToDoEntity[]> {
    return [];
  }
}
