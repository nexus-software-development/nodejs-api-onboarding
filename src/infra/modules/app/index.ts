import { Module } from "@nestjs/common";
import { ExampleModule } from "@infra/modules/example";
import { TaskModule } from "../task";

@Module({
  imports: [ExampleModule, TaskModule]
})
export class AppModule {}
