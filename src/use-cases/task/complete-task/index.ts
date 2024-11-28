import { ITaskRepository } from "@domain/repositories/taskRepository";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class CompleteTaskUseCase {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async completeTask(id: number): Promise<void> {
    const taskExists = await this.taskRepository.findOne(id);
    if (!taskExists) throw new NotFoundException("Task not exists");
    await this.taskRepository.completeTask(taskExists.id);
    return;
  }
}
