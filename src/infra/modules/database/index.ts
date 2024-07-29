import { PrismaExampleRepository } from "@infra/repositories/prisma/example";
import { Module } from "@nestjs/common";
import { ExampleRepository } from "@domain/repositories/example";
import { Prisma } from "@infra/config/prisma";
import { PrismaTodoRepository } from "@infra/repositories/prisma/todos";
import { TodoRepository } from "@domain/repositories/todo";

@Module({
  providers: [
    Prisma,
    {
      useClass: PrismaExampleRepository,
      provide: ExampleRepository
    },
    {
      useClass: PrismaTodoRepository,
      provide: TodoRepository
    }
  ],
  exports: [
    {
      useClass: PrismaExampleRepository,
      provide: ExampleRepository
    },
    {
      useClass: PrismaTodoRepository,
      provide: TodoRepository
    }
  ]
})
export class DatabaseModule {}
