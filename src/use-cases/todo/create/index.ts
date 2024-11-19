import { ToDo } from "@domain/entities/todo";
import { ToDoRepository } from "@domain/repositories/todo-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateToDoUseCase {
  constructor(private toDoRepository: ToDoRepository) {}

  async execute(text: string): Promise<ToDo> {
    const newToDo: ToDo = {
      id: 0,
      text,
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return this.toDoRepository.create(newToDo);
  }
}
