import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { CreateTaskUseCase } from ".";
import { ITaskRepository } from "@domain/repositories/taskRepository";

describe("Create Taks Use Case", () => {
  let sut: CreateTaskUseCase;
  let taskRepository: ITaskRepository;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    sut = new CreateTaskUseCase(taskRepository);
  });

  it("should call a method that create an task", async () => {
    jest.spyOn(taskRepository, "create");

    const TEXT = "text";

    await sut.create(TEXT);

    expect(taskRepository.create).toHaveBeenCalledWith(TEXT);
  });
});
