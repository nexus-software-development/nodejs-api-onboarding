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

  findAll(): Promise<ToDo[]> {
    return this.prisma.toDo.findMany();
  }

  findById(id: number): Promise<ToDo | null> {
    return this.prisma.toDo.findUnique({
      where: {
        id
      }
    });
  }

  update(toDo: ToDo): Promise<ToDo> {
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
