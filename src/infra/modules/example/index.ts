import { Module } from "@nestjs/common";
import { CreateExampleUseCase } from "@use-cases/example/create";
import { FindAllExampleUseCase } from "@use-cases/example/find-all";
import { DatabaseModule } from "@infra/modules/database";

@Module({
  imports: [DatabaseModule],
  providers: [FindAllExampleUseCase, CreateExampleUseCase]
})
export class ExampleModule {}
