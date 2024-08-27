import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { ExampleRepository } from "@application/repositories/example";
import { PrismaExampleRepository } from "@infra/database/prisma/repositories/prisma/example";

@Module({
  providers: [
    PrismaService,
    {
      provide: ExampleRepository,
      useClass: PrismaExampleRepository
    }
  ],
  exports: [PrismaService, ExampleRepository]
})
export class DatabaseModule {}
