import { Module } from "@nestjs/common";
import { ExampleModule } from "@infra/modules/example";
import { ToDoModule } from "@infra/modules/to-do";

@Module({
  imports: [ExampleModule, ToDoModule]
})
export class AppModule {}
