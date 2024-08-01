import { TaskRepository } from "@domain/repositories/task";
import { ConflictException, Injectable } from "@nestjs/common";

@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(text: string): Promise<void> {
    if (await this.taskRepository.findByText(text)) {
      throw new ConflictException("Já existe uma Tarefa como essa");
    }

    return this.taskRepository.create(text);
  }
}
