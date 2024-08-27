import { CreateToDoUseCase } from "@application/use-cases/to-do/create";
import { FindAllToDosUseCase } from "@application/use-cases/to-do/find-all";
import { MarkToDoAsCompletedUseCase } from "@application/use-cases/to-do/mark-as-completed";
import { DatabaseModule } from "@infra/database/database.module";
import { ToDoController } from "@infra/http/controllers/todo";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule],
  providers: [
    CreateToDoUseCase,
    FindAllToDosUseCase,
    MarkToDoAsCompletedUseCase
  ],
  controllers: [ToDoController]
})
export class ToDoModule {}
