import { ToDoEntity } from "@domain/entities/toDoEntity";
import { IToDoRepository } from "@domain/repositories/toDoRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllToDoUseCase {
  constructor(private readonly toDoRepository: IToDoRepository) {}

  async findAll(): Promise<{ toDo: ToDoEntity[] }> {
    const toDo = await this.toDoRepository.findAll();
    return { toDo };
  }
}
