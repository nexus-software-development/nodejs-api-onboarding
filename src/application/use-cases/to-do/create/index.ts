import { ToDoRepository } from "@application/repositories/to-do";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateToDoUseCase {
  constructor(private readonly toDoRepository: ToDoRepository) {}

  async create(text: string): Promise<void> {
    await this.toDoRepository.create(text);
  }
}
