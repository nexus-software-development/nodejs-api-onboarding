import { TaskEntity } from "@domain/entities/taskEntity";
import { ITaskRepository } from "@domain/repositories/taskRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllTasksUseCase {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async findAll(): Promise<{ task: TaskEntity[] }> {
    const task = await this.taskRepository.findAll();
    return { task };
  }
}
