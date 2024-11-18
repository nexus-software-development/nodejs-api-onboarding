import { ToDo } from "@domain/entities/todo";
import { ToDoRepository } from "@domain/repositories/todo-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllToDosUseCase {
  constructor(private toDoRepository: ToDoRepository) {}

  async execute(filterText?: string): Promise<ToDo[]> {
    if (filterText) {
      return this.toDoRepository.findByText(filterText);
    }

    return this.toDoRepository.findAll();
  }
}
