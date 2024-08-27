import { ToDoRepository } from "@application/repositories/to-do";
import { MarkToDoAsCompletedUseCase } from ".";
import { ToDoRepositoryStub } from "@test/stubs/repositories/to-do";
import { makeToDo } from "@test/factories/entities/to-do";

describe("Mark ToDo As Completed Use Case", () => {
  let sut: MarkToDoAsCompletedUseCase;
  let toDoRepository: ToDoRepository;

  beforeEach(() => {
    toDoRepository = new ToDoRepositoryStub();
    sut = new MarkToDoAsCompletedUseCase(toDoRepository);
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
    expect(toDoRepository).toBeDefined();
  });

  it("should throw if no ToDo is found with given ID", async () => {
    jest.spyOn(toDoRepository, "findOne").mockResolvedValueOnce(null);

    const promise = sut.markToDoAsCompleted(1);

    await expect(promise).rejects.toThrow('No ToDo was found with ID "1".');
    expect(toDoRepository.findOne).toHaveBeenNthCalledWith(1, 1);
  });

  it("should call repository .save method", async () => {
    const toDo = makeToDo();

    jest.spyOn(toDoRepository, "findOne").mockResolvedValueOnce(toDo);
    jest.spyOn(toDoRepository, "save");

    await sut.markToDoAsCompleted(toDo.id);

    expect(toDoRepository.findOne).toHaveBeenNthCalledWith(1, toDo.id);
    expect(toDoRepository.save).toHaveBeenNthCalledWith(1, {
      ...toDo,
      isCompleted: true
    });
  });
});
