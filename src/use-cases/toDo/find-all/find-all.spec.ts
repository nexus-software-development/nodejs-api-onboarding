import { IToDoRepository } from "@domain/repositories/toDoRepository";
import { FindAllToDoUseCase } from ".";
import { ToDoRepositoryStub } from "@test/stubs/repositories/toDo";
import { ToDoEntity } from "@domain/entities/toDoEntity";

describe("Hello World Example Use Case", () => {
  let sut: FindAllToDoUseCase;
  let exampleRepository: IToDoRepository;

  beforeEach(() => {
    exampleRepository = new ToDoRepositoryStub();
    sut = new FindAllToDoUseCase(exampleRepository);
  });

  const toDo = {
    id: 123,
    toDoDescription: "Texto"
  } as ToDoEntity;
  const tasks = [toDo, toDo, toDo];

  console.log(toDo, tasks);

  it("should call a method that return a list of examples", async () => {
    jest.spyOn(exampleRepository, "findAll").mockResolvedValue(tasks);

    const result = await sut.findAll();

    expect(result).toStrictEqual({ toDo: tasks });
  });
});
