import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { DeleteTaskUseCase } from ".";
import { ValidateTaskIdUseCase } from "../validate-task-id";

describe("Delete Task UseCase", () => {
  let sut: DeleteTaskUseCase;
  let validateTaskId: ValidateTaskIdUseCase;
  let taskRepository: TaskRepositoryStub;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    validateTaskId = new ValidateTaskIdUseCase();
    sut = new DeleteTaskUseCase(taskRepository, validateTaskId);
  });

  it("should call a method that delete an task", async () => {
    jest.spyOn(taskRepository, "deleteTask");
    jest.spyOn(validateTaskId, "validate");

    const ID: string = "97531";

    await sut.deleteTask(ID);

    const ID_NUMBER = Number(ID);

    expect(validateTaskId.validate).toHaveBeenLastCalledWith(ID);
    expect(taskRepository.deleteTask).toHaveBeenCalledWith(ID_NUMBER);
  });
});
