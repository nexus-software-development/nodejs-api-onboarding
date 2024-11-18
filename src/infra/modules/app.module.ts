import { Module } from "@nestjs/common";
import { ToDoModule } from "./todo.module";

@Module({
  imports: [ToDoModule]
})
export class AppModule {}
