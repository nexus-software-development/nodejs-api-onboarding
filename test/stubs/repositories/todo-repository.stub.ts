import { ToDo } from "@domain/entities/todo";
import { ToDoRepository } from "@domain/repositories/todo-repository";

export class ToDoRepositoryStub implements ToDoRepository {
  async create(toDo: ToDo): Promise<ToDo> {
    return { ...toDo, id: 1 };
  }

  async findAll(filterText?: string): Promise<ToDo[]> {
    if (filterText) {
      return [
        {
          id: 1,
          text: "Buy groceries",
          isCompleted: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
    }
    return [
      {
        id: 1,
        text: "Buy groceries",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        text: "Clean the house",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }

  async findById(id: string): Promise<ToDo | null> {
    return null;
  }

  async update(toDo: ToDo): Promise<ToDo> {
    return toDo;
  }

  async markAsCompleted(id: string): Promise<ToDo> {
    return {
      id: parseInt(id),
      text: "Buy groceries",
      isCompleted: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
}
