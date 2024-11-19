import { ToDo } from "@domain/entities/todo";
import { ToDoRepository } from "@domain/repositories/todo-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MarkAsCompletedUseCase {
  constructor(private toDoRepository: ToDoRepository) {}

  async execute(id: string): Promise<ToDo> {
    return this.toDoRepository.markAsCompleted(id);
  }
}
