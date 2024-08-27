import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { ExampleRepository } from "@application/repositories/example";
import { PrismaExampleRepository } from "@infra/database/prisma/repositories/example";
import { ToDoRepository } from "@application/repositories/to-do";
import { PrismaToDoRepository } from "./prisma/repositories/to-do";

@Module({
  providers: [
    PrismaService,
    {
      provide: ExampleRepository,
      useClass: PrismaExampleRepository
    },
    {
      provide: ToDoRepository,
      useClass: PrismaToDoRepository
    }
  ],
  exports: [PrismaService, ExampleRepository, ToDoRepository]
})
export class DatabaseModule {}
