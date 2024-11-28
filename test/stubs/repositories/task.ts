import { TaskEntity } from "@domain/entities/taskEntity";
import { ITaskRepository } from "@domain/repositories/taskRepository";

export class TaskRepositoryStub implements ITaskRepository {
  async findOne(): Promise<TaskEntity> {
    return;
  }

  async create(): Promise<void> {
    return;
  }

  async completeTask(): Promise<void> {
    return;
  }

  async findAll(): Promise<TaskEntity[]> {
    return [];
  }
}
