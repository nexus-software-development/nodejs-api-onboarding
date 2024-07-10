import { Example } from "@domain/entities/example";
import { ExampleRepository } from "@domain/repositories/example";
import { Prisma } from "@infra/config/prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaExampleRepository implements ExampleRepository {
  constructor(private readonly prisma: Prisma) {}

  async create(text: string): Promise<void> {
    await this.prisma.example.create({
      data: {
        text
      }
    });

    return;
  }

  async findAll(): Promise<Example[]> {
    return this.prisma.example.findMany();
  }
}
