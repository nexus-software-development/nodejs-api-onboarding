import { ToDoRepository } from "@application/repositories/to-do";
import { ToDo } from "@domain/entities/to-do";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllToDosUseCase {
  constructor(private readonly toDoRepository: ToDoRepository) {}

  async findAll(text?: string): Promise<{ toDos: ToDo[] }> {
    const toDos = await this.toDoRepository.findAll({
      where: {
        text
      }
    });

    return {
      toDos: toDos || []
    };
  }
}
