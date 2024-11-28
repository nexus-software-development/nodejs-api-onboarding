import { TaskEntity } from "@domain/entities/taskEntity";
import { ITaskRepository } from "@domain/repositories/taskRepository";
import { Prisma } from "@infra/config/prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaTaskRepository implements ITaskRepository {
  constructor(private readonly prisma: Prisma) {}
  async findOne(id: number): Promise<TaskEntity> {
    return await this.prisma.task.findUnique({
      where: { id }
    });
  }

  async completeTask(id: number): Promise<void> {
    await this.prisma.task.update({
      where: { id },
      data: { isCompleted: true }
    });
    return;
  }

  async create(task: string): Promise<void> {
    await this.prisma.task.create({
      data: {
        task
      }
    });
    return;
  }

  async findAll(): Promise<TaskEntity[]> {
    return this.prisma.task.findMany();
  }
}
