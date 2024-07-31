import { Module } from "@nestjs/common";
import { CreateExampleUseCase } from "@use-cases/example/create";
import { FindAllExampleUseCase } from "@use-cases/example/find-all";
import { DatabaseModule } from "../database";
import { ExampleController } from "@infra/controllers/example";

@Module({
  imports: [DatabaseModule],
  controllers: [ExampleController],
  providers: [FindAllExampleUseCase, CreateExampleUseCase]
})
export class ExampleModule {}
