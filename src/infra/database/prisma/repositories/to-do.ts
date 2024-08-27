import { Injectable } from "@nestjs/common";
import { PrismaService } from "@infra/database/prisma/prisma.service";
import {
  FindAllToDosOptions,
  ToDoRepository
} from "@application/repositories/to-do";
import { ToDo } from "@domain/entities/to-do";
import { PrismaToDoMapper } from "../mappers/todo";

@Injectable()
export class PrismaToDoRepository implements ToDoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(text: string): Promise<void> {
    await this.prismaService.example.create({
      data: {
        text
      }
    });
  }

  async findAll(options: FindAllToDosOptions): Promise<ToDo[]> {
    const toDos = await this.prismaService.example.findMany({
      where: {
        text: options?.where.text
      }
    });

    if (!toDos.length) return [];

    return toDos.map(PrismaToDoMapper.toDomain);
  }
}
