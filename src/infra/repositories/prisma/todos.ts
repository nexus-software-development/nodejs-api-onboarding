import { Todo } from "@domain/entities/todo";
import { TodoRepository } from "@domain/repositories/todo";
import { Prisma } from "@infra/config/prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaTodoRepository implements TodoRepository {
  constructor(private readonly prisma: Prisma) {}

  async create(text: string): Promise<void> {
    await this.prisma.todo.create({
      data: {
        text
      }
    });

    return;
  }

  async findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async findByText(text: string): Promise<Todo[]> {
    return this.prisma.todo.findMany({
      where: {
        text: {
          contains: text,
          mode: "insensitive"
        }
      }
    });
  }
}
