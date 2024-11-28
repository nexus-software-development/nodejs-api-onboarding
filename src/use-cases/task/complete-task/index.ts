import { ITaskRepository } from "@domain/repositories/taskRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CompleteTaskUseCase {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async completeTask(id: number): Promise<void> {
    await this.taskRepository.completeTask(id);
    return;
  }
}
