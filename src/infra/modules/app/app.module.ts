import { Module } from "@nestjs/common";
import { ToDoModule } from "../example/todo.module";

@Module({
  imports: [ToDoModule]
})
export class AppModule {}
