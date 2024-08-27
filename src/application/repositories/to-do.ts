import { ToDo } from "@domain/entities/to-do";

export type FindAllToDosOptions = {
  where?: {
    text?: string;
  };
};

export abstract class ToDoRepository {
  abstract create(text: string): Promise<void>;
  abstract findAll(options?: FindAllToDosOptions): Promise<ToDo[]>;
}
