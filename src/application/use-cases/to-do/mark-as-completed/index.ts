import { ToDoRepository } from "@application/repositories/to-do";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class MarkToDoAsCompletedUseCase {
  constructor(private readonly toDoRepository: ToDoRepository) {}

  async markToDoAsCompleted(id: number): Promise<void> {
    const toDo = await this.toDoRepository.findOne(id);

    if (!toDo) {
      throw new NotFoundException(`No ToDo was found with ID "${id}".`);
    }

    toDo.isCompleted = true;

    await this.toDoRepository.save(toDo);
  }
}
