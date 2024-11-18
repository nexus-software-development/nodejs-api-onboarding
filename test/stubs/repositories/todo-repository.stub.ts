import { ToDo } from "@domain/entities/todo";
import { ToDoRepository } from "@domain/repositories/todo-repository";

export class ToDoRepositoryStub implements ToDoRepository {
  async create(toDo: ToDo): Promise<ToDo> {
    return { ...toDo, id: 1 };
  }

  async findAll(): Promise<ToDo[]> {
    return [];
  }

  async findByText(text: string): Promise<ToDo[]> {
    return [];
  }

  async findById(id: number): Promise<ToDo | null> {
    return null;
  }

  async update(toDo: ToDo): Promise<ToDo> {
    return toDo;
  }
}
