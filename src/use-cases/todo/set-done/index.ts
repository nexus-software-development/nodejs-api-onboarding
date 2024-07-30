import { TodoRepository } from "@domain/repositories/todo";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SetDoneTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async setDone(id: string): Promise<void> {
    return this.todoRepository.setDone(id);
  }
}
