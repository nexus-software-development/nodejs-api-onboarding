import { TaskRepository } from "@domain/repositories/task";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async deleteTask(id: number): Promise<void> {
    return this.taskRepository.deleteTask(id);
  }
}
