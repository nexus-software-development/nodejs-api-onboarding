import { TaskEntity } from "@domain/entities/taskEntity";

export abstract class TaskRepository {
  abstract create(taskDescription: string): Promise<void>;
  abstract findAll(): Promise<TaskEntity[]>;
  abstract findOne(id: number): Promise<TaskEntity>;
  abstract completeTask(id: number): Promise<void>;
}
