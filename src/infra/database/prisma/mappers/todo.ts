import { ToDo } from "@domain/entities/to-do";
import { ToDo as PrismaToDo } from "@prisma/client";

export class PrismaToDoMapper {
  static toDomain(toDo: PrismaToDo): ToDo {
    return {
      // map any domain property to infra
      ...toDo
    };
  }

  static toPrisma(toDo: ToDo): PrismaToDo {
    return {
      // map any infra property to domain
      ...toDo
    };
  }
}
