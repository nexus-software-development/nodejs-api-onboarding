import { Task } from "@domain/entities/task";
import { TaskRepository } from "@domain/repositories/task";
import { TaskRepositoryStub } from "@test/stubs/repositories/task";
import { FindAllTaskUseCase } from ".";

describe("Find All Tasks UseCase", () => {
  let sut: FindAllTaskUseCase;
  let taskRepository: TaskRepository;

  beforeEach(() => {
    taskRepository = new TaskRepositoryStub();
    sut = new FindAllTaskUseCase(taskRepository);
  });

  const TASK = {
    id: "0t1b2i3",
    text: "TEXT"
  } as unknown as Task;

  const tasks: Task[] = [TASK, TASK, TASK, TASK];

  it("should call a method that return a list of tasks", async () => {
    jest.spyOn(taskRepository, "findAll").mockResolvedValue(tasks);

    const res = await sut.findAll();

    expect(res).toStrictEqual({ tasks });
  });
});
