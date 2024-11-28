import { TaskEntity } from "@domain/entities/taskEntity";
import { TaskRepository } from "@domain/repositories/taskRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllTasksUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async findAll(): Promise<{ task: TaskEntity[] }> {
    const task = await this.taskRepository.findAll();
    return { task };
  }
}
