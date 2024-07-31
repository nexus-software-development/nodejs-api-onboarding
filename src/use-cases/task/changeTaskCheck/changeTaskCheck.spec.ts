import { TaskRepository } from "@domain/repositories/task";
import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { ChangeTaskCheckUseCase } from ".";

describe("Change Task Check UseCase", () => {
  let sut: ChangeTaskCheckUseCase;
  let taskRepository: TaskRepository;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    sut = new ChangeTaskCheckUseCase(taskRepository);
  });

  it("should call a method that changes task check", async () => {
    jest.spyOn(taskRepository, "changeTaskCheck");

    const ID: number = 123435;

    await sut.changeTaskCheck(ID);

    expect(taskRepository.changeTaskCheck).toHaveBeenCalledWith(ID);
  });
});
