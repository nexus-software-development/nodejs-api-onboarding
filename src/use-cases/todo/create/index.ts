import { TodoRepository } from "@domain/repositories/todo";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async create(text: string): Promise<void> {
    return this.todoRepository.create(text);
  }
}
