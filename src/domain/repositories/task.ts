import { Task } from "@domain/entities/Task";

export abstract class TaskRepository {
  abstract create(text: string): Promise<void>;
  abstract findAll(): Promise<Task[]>;
  abstract changeTaskCheck(id: number): Promise<void>;
}
