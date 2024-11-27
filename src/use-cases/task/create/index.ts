import { ITaskRepository } from "@domain/repositories/taskRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async create(taskDescription: string): Promise<void> {
    return this.taskRepository.create(taskDescription);
  }
}
