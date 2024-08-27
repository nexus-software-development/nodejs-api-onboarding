import { Module } from "@nestjs/common";
import { CreateExampleUseCase } from "@application/use-cases/example/create";
import { FindAllExampleUseCase } from "@application/use-cases/example/find-all";
import { ExampleController } from "@infra/controllers/example";
import { DatabaseModule } from "@infra/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [ExampleController],
  providers: [FindAllExampleUseCase, CreateExampleUseCase]
})
export class ExampleModule {}
