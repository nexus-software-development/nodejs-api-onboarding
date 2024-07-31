import { TaskRepository } from "@domain/repositories/task";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ChangeTaskCheckUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async changeTaskCheck(id: number): Promise<void> {
    return this.taskRepository.changeTaskCheck(id);
  }
}
