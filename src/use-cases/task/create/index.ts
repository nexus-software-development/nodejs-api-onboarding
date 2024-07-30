import { TaskRepository } from "@domain/repositories/task";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(text: string): Promise<void> {
    return this.taskRepository.create(text);
  }
}
