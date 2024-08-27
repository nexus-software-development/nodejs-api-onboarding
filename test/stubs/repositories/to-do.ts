import { ToDoRepository } from "@application/repositories/to-do";
import { ToDo } from "@domain/entities/to-do";

export class ToDoRepositoryStub implements ToDoRepository {
  async create(): Promise<void> {
    return;
  }

  async findAll(): Promise<ToDo[]> {
    return [];
  }

  async findOne(id: number): Promise<ToDo | null> {
    return {
      id,
      text: "Random text",
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  async save(): Promise<void> {
    return;
  }
}
