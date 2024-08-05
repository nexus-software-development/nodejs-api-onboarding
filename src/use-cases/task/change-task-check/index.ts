import { TaskRepository } from "@domain/repositories/task";
import { Injectable } from "@nestjs/common";
import { ValidateTaskIdUseCase } from "../validate-task-id";

@Injectable()
export class ChangeTaskCheckUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly validateTaskId: ValidateTaskIdUseCase
  ) {}

  async changeTaskCheck(id: string): Promise<void> {
    const ID: number = this.validateTaskId.validate(id);

    return this.taskRepository.changeTaskCheck(ID);
  }
}
