import { IToDoRepository } from "@domain/repositories/toDoRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateToDoUseCase {
  constructor(private readonly toDoRepository: IToDoRepository) {}

  async create(toDoDescription: string): Promise<void> {
    return this.toDoRepository.create(toDoDescription);
  }
}
