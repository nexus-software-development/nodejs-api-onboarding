import { ITaskRepository } from "@domain/repositories/taskRepository";
import { FindAllTasksUseCase } from ".";
import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { TaskEntity } from "@domain/entities/taskEntity";

describe("Find all tasks Use Case", () => {
  let sut: FindAllTasksUseCase;
  let taskRepository: ITaskRepository;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    sut = new FindAllTasksUseCase(taskRepository);
  });

  const task = {
    id: 123,
    task: "Texto"
  } as TaskEntity;
  const tasks = [task, task, task];

  it("should call a method that return a list of tasks", async () => {
    jest.spyOn(taskRepository, "findAll").mockResolvedValue(tasks);

    const result = await sut.findAll();

    expect(result).toStrictEqual({ task: tasks });
  });
});
