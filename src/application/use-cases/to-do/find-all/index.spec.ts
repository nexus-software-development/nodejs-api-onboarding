import { ToDoRepository } from "@application/repositories/to-do";
import { FindAllToDosUseCase } from ".";
import { ToDoRepositoryStub } from "@test/stubs/repositories/to-do";
import { ToDo } from "@domain/entities/to-do";

function makeToDo(toDo?: Partial<ToDo>): ToDo {
  return {
    id: toDo?.id ?? Math.random(),
    isCompleted: toDo?.isCompleted ?? false,
    text: toDo?.text ?? "Random text",
    createdAt: toDo?.createdAt ?? new Date(),
    updatedAt: toDo?.updatedAt ?? new Date()
  };
}

describe("FindAll ToDos Use Case", () => {
  let sut: FindAllToDosUseCase;
  let toDoRepository: ToDoRepository;

  beforeEach(() => {
    toDoRepository = new ToDoRepositoryStub();
    sut = new FindAllToDosUseCase(toDoRepository);
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
    expect(toDoRepository).toBeDefined();
  });

  it("should call repository .findAll method", async () => {
    const mockedToDos = [makeToDo(), makeToDo(), makeToDo()];

    jest.spyOn(toDoRepository, "findAll").mockResolvedValueOnce(mockedToDos);

    const promise = sut.findAll();

    await expect(promise).resolves.toStrictEqual({
      toDos: mockedToDos
    });
  });
});
