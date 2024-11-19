import { Test, TestingModule } from "@nestjs/testing";
import { ToDoController } from "./todo.controller";
import { CreateToDoUseCase } from "@use-cases/example/create/create-todo";
import { CreateToDoDto } from "./example/dtos/create-todo.dto";
import { FindAllToDosUseCase } from "@use-cases/example/find-all/find-all-todos.use-case";
import { MarkAsCompletedUseCase } from "@use-cases/example/mark-as-completed/mark-as-completed.use-case";

describe("ToDoController", () => {
  let controller: ToDoController;
  let createToDoUseCase: CreateToDoUseCase;
  let findAllToDosUseCase: FindAllToDosUseCase;
  let markAsCompletedUseCase: MarkAsCompletedUseCase;

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
        },
        {
          provide: FindAllToDosUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue([
              {
                id: 1,
                text: "Buy groceries",
                isCompleted: false,
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                id: 2,
                text: "Clean the house",
                isCompleted: false,
                createdAt: new Date(),
                updatedAt: new Date()
              }
            ])
          }
        },
        {
          provide: MarkAsCompletedUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue({
              id: 1,
              text: "Buy groceries",
              isCompleted: true,
              createdAt: new Date(),
              updatedAt: new Date()
            })
          }
        }
      ]
    }).compile();

    controller = module.get<ToDoController>(ToDoController);
    createToDoUseCase = module.get<CreateToDoUseCase>(CreateToDoUseCase);
    findAllToDosUseCase = module.get<FindAllToDosUseCase>(FindAllToDosUseCase);
    markAsCompletedUseCase = module.get<MarkAsCompletedUseCase>(
      MarkAsCompletedUseCase
    );
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

  it("should return a list of ToDo items", async () => {
    const result = await controller.findAll();

    expect(result).toEqual([
      {
        id: 1,
        text: "Buy groceries",
        isCompleted: false,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date)
      },
      {
        id: 2,
        text: "Clean the house",
        isCompleted: false,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date)
      }
    ]);
    expect(findAllToDosUseCase.execute).toHaveBeenCalled();
  });

  it("should mark a ToDo item as completed", async () => {
    const result = await controller.markAsCompleted(1);

    expect(result).toEqual({
      id: 1,
      text: "Buy groceries",
      isCompleted: true,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)
    });
    expect(markAsCompletedUseCase.execute).toHaveBeenCalledWith(1);
  });
});
