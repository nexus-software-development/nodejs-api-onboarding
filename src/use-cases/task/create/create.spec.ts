import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { CreateTaskUseCase } from ".";
import { ITaskRepository } from "@domain/repositories/taskRepository";

describe("Create Example Use Case", () => {
  let sut: CreateTaskUseCase;
  let exampleRepository: ITaskRepository;

  beforeEach(() => {
    exampleRepository = new TaskRepositoryStub();
    sut = new CreateTaskUseCase(exampleRepository);
  });

  it("should call a method that create an example", async () => {
    jest.spyOn(exampleRepository, "create");

    const TEXT = "text";

    await sut.create(TEXT);

    expect(exampleRepository.create).toHaveBeenCalledWith(TEXT);
  });
});
