import { ToDoEntity } from "./toDoEntity";

describe("ToDoEntity", () => {
  it("should create an instance of ToDoEntity with the correct properties", () => {
    const props = { toDoDescription: "Task one" };
    const toDoEntity = new ToDoEntity(props);

    expect(toDoEntity.toDoDescription).toBe(props.toDoDescription);
    expect(toDoEntity.isActive).toBe(true);
    expect(toDoEntity.createdAt).toBeInstanceOf(Date);
    expect(toDoEntity.updatedAt).toBeInstanceOf(Date);
  });

  it("should create the dates (createdAt and updatedAt) as close to each other at the time of creation", () => {
    const props = { toDoDescription: "Task two" };
    const toDoEntity = new ToDoEntity(props);

    expect(toDoEntity.createdAt).toEqual(toDoEntity.updatedAt);
  });
});
