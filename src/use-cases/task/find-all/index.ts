import { Task } from "@domain/entities/task";
import { TaskRepository } from "@domain/repositories/task";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async findAll(): Promise<{ tasks: Task[] }> {
    const tasks: Task[] = await this.taskRepository.findAll();
    return { tasks };
  }
}
