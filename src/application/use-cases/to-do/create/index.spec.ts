import { ToDoRepository } from "@application/repositories/to-do";
import { CreateToDoUseCase } from ".";
import { ToDoRepositoryStub } from "@test/stubs/repositories/to-do";
import { makeToDo } from "@test/factories/entities/to-do";

describe("Create ToDo Use Case", () => {
  let sut: CreateToDoUseCase;
  let toDoRepository: ToDoRepository;

  beforeEach(() => {
    toDoRepository = new ToDoRepositoryStub();
    sut = new CreateToDoUseCase(toDoRepository);
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
    expect(toDoRepository).toBeDefined();
  });

  it("should throw if given text has already been used for another ToDo", async () => {
    const mockedToDo = makeToDo();

    jest.spyOn(toDoRepository, "findByText").mockResolvedValueOnce(mockedToDo);

    const promise = sut.create(mockedToDo.text);

    await expect(promise).rejects.toThrow(
      "A ToDo has already been created with given text."
    );
    expect(toDoRepository.findByText).toHaveBeenNthCalledWith(
      1,
      mockedToDo.text
    );
  });

  it("should call repository .create method", async () => {
    jest.spyOn(toDoRepository, "findByText").mockResolvedValueOnce(null);
    jest.spyOn(toDoRepository, "create");

    const text = "Just a random text";

    await sut.create(text);

    expect(toDoRepository.create).toHaveBeenNthCalledWith(1, text);
  });
});
