import { Test, TestingModule } from "@nestjs/testing";
import { ToDoController } from "./todo.controller";
import { CreateToDoUseCase } from "@use-cases/example/create/create-todo";
import { CreateToDoDto } from "./example/dtos/create-todo.dto";

describe("ToDoController", () => {
  let controller: ToDoController;
  let createToDoUseCase: CreateToDoUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToDoController],
      providers: [
        {
          provide: CreateToDoUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue({
              id: 1,
              text: "Buy groceries",
              isCompleted: false,
              createdAt: new Date(),
              updatedAt: new Date()
            })
          }
        }
      ]
    }).compile();

    controller = module.get<ToDoController>(ToDoController);
    createToDoUseCase = module.get<CreateToDoUseCase>(CreateToDoUseCase);
  });

  it("should create a new ToDo item", async () => {
    const createToDoDto: CreateToDoDto = { text: "Buy groceries" };

    const result = await controller.create(createToDoDto);

    expect(result).toEqual({
      id: 1,
      text: "Buy groceries",
      isCompleted: false,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)
    });
    expect(createToDoUseCase.execute).toHaveBeenCalledWith("Buy groceries");
  });
});
