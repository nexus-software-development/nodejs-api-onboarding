import { ToDoRepository } from "@application/repositories/to-do";
import { ConflictException, Injectable } from "@nestjs/common";

@Injectable()
export class CreateToDoUseCase {
  constructor(private readonly toDoRepository: ToDoRepository) {}

  async create(text: string): Promise<void> {
    const toDo = await this.toDoRepository.findByText(text);

    if (toDo) {
      throw new ConflictException(
        `A ToDo has already been created with given text.`
      );
    }

    await this.toDoRepository.create(text);
  }
}
