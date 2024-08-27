import { ToDo } from "@domain/entities/to-do";

export type FindAllToDosOptions = {
  where?: {
    text?: string;
  };
};

export abstract class ToDoRepository {
  abstract create(text: string): Promise<void>;
  abstract findAll(options?: FindAllToDosOptions): Promise<ToDo[]>;
  abstract findOne(id: number): Promise<ToDo | null>;
  abstract save(toDo: ToDo): Promise<void>;
}
