import { faker } from "@faker-js/faker";
import { ToDo } from "@domain/entities/to-do";

export function makeToDo(props?: Partial<ToDo>): ToDo {
  return {
    id: props?.id ?? faker.number.int(),
    isCompleted: props?.isCompleted ?? faker.datatype.boolean(),
    text: props?.text ?? faker.lorem.text(),
    createdAt: props?.createdAt ?? faker.date.future(),
    updatedAt: props?.updatedAt ?? faker.date.future()
  };
}
