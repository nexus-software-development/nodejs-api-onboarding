import { TaskEntity } from "@domain/entities/taskEntity";

export abstract class ITaskRepository {
  abstract create(taskDescription: string): Promise<void>;
  abstract findAll(): Promise<TaskEntity[]>;
}
