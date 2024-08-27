import { Example } from "@domain/entities/example";
import { ExampleRepository } from "@application/repositories/example";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "@infra/database/prisma/prisma.service";

@Injectable()
export class PrismaExampleRepository implements ExampleRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(text: string): Promise<void> {
    await this.prismaService.example.create({
      data: {
        text
      }
    });

    return;
  }

  async findAll(): Promise<Example[]> {
    return this.prismaService.example.findMany();
  }
}
