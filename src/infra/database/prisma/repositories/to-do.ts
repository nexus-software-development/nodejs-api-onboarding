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
    await this.prismaService.toDo.create({
      data: {
        text
      }
    });
  }

  async findAll(options: FindAllToDosOptions): Promise<ToDo[]> {
    const toDos = await this.prismaService.toDo.findMany({
      where: {
        text: options?.where.text
      }
    });

    if (!toDos.length) return [];

    return toDos.map(PrismaToDoMapper.toDomain);
  }

  async findByText(text: string): Promise<ToDo | null> {
    const toDo = await this.prismaService.toDo.findUnique({
      where: {
        text
      }
    });

    console.log(toDo);

    if (!toDo) return null;

    return PrismaToDoMapper.toDomain(toDo);
  }

  async findOne(id: number): Promise<ToDo | null> {
    const toDo = await this.prismaService.toDo.findUnique({
      where: {
        id
      }
    });

    if (!toDo) return null;

    return PrismaToDoMapper.toDomain(toDo);
  }

  async save(toDo: ToDo): Promise<void> {
    await this.prismaService.toDo.update({
      where: {
        id: toDo.id
      },
      data: toDo
    });
  }
}
