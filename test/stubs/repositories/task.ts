import { Task } from "@domain/entities/task";
import { TaskRepository } from "@domain/repositories/task";

export class TaskRepositoryStub implements TaskRepository {
    async create(): Promise<void> {
        return;
    }
     
    async findAll(): Promise<Task[]> {
        return [];
    }

    async changeTaskCheck(): Promise<void> {
        return;
    }
}