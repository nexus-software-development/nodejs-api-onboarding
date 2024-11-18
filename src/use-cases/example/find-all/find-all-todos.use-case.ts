import { ToDo } from "@domain/entities/todo";
import { ToDoRepository } from "@domain/repositories/todo-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllToDosUseCase {
  constructor(private toDoRepository: ToDoRepository) {}

  async execute(): Promise<ToDo[]> {
    return this.toDoRepository.findAll();
  }
}
