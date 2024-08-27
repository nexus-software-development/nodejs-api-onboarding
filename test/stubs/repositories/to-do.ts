import { ToDoRepository } from "@application/repositories/to-do";
import { ToDo } from "@domain/entities/to-do";

export class ToDoRepositoryStub implements ToDoRepository {
  async create(): Promise<void> {
    return;
  }

  async findAll(): Promise<ToDo[]> {
    return [];
  }
}
