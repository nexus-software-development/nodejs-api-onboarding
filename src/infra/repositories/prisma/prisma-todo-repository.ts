import { ToDo } from "@domain/entities/todo";
import { ToDoRepository } from "@domain/repositories/todo-repository";
import { PrismaClient } from "@prisma/client";

export class PrismaToDoRepository implements ToDoRepository {
  private prisma = new PrismaClient();

  async create(toDo: ToDo): Promise<ToDo> {
    const createdToDo = await this.prisma.toDo.create({
      data: {
        text: toDo.text,
        isCompleted: toDo.isCompleted,
        createdAt: toDo.createdAt,
        updatedAt: toDo.updatedAt
      }
    });

    return {
      ...toDo,
      id: createdToDo.id
    };
  }

  async findAll(filterText?: string): Promise<ToDo[]> {
    if (filterText) {
      return this.prisma.toDo.findMany({
        where: {
          text: {
            contains: filterText,
            mode: "insensitive"
          }
        }
      });
    }

    return this.prisma.toDo.findMany();
  }

  async findById(id: number): Promise<ToDo | null> {
    return this.prisma.toDo.findUnique({
      where: {
        id
      }
    });
  }

  async update(toDo: ToDo): Promise<ToDo> {
    const updatedToDo = this.prisma.toDo.update({
      where: {
        id: toDo.id
      },
      data: {
        text: toDo.text,
        isCompleted: toDo.isCompleted,
        updatedAt: toDo.updatedAt
      }
    });

    return updatedToDo;
  }
}