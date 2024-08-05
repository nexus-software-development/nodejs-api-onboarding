import { TaskRepository } from "@domain/repositories/task";
import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { ChangeTaskCheckUseCase } from ".";
import { ValidateTaskIdUseCase } from "../validate-task-id";

describe("Change Task Check UseCase", () => {
  let sut: ChangeTaskCheckUseCase;
  let taskRepository: TaskRepository;
  let validateTaskId: ValidateTaskIdUseCase;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    validateTaskId = new ValidateTaskIdUseCase();
    sut = new ChangeTaskCheckUseCase(taskRepository, validateTaskId);
  });

  it("should call a method that changes task check", async () => {
    jest.spyOn(taskRepository, "changeTaskCheck");

    const ID: string = "123435";

    await sut.changeTaskCheck(ID);

    const ID_NUMBER: number = Number(ID);

    expect(taskRepository.changeTaskCheck).toHaveBeenCalledWith(ID_NUMBER);
  });
});
