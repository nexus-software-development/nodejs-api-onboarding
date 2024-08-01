import { Task } from "@domain/entities/task";
import { TaskRepository } from "@domain/repositories/task";
import { Prisma } from "@infra/config/prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private readonly prisma: Prisma) {}

  async create(text: string): Promise<void> {
    await this.prisma.task.create({ data: { text } });
  }

  async findAll(): Promise<Task[]> {
    return await this.prisma.task.findMany();
  }

  async changeTaskCheck(id: number): Promise<void> {
    const task: Task = await this.prisma.task.findUnique({ where: { id } });

    await this.prisma.task.update({
      where: { id },
      data: { isChecked: !task.isChecked }
    });
  }

  async findByText(text: string): Promise<Task | null> {
    return await this.prisma.task.findUnique({ where: { text } });
  }
}
