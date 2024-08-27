import { Example } from "@domain/entities/example";
import { faker } from "@faker-js/faker";

export function makeExample(props?: Partial<Example>): Example {
  return {
    id: props?.id ?? faker.number.int(),
    text: props?.text ?? faker.lorem.text(),
    createdAt: props?.createdAt ?? faker.date.future(),
    updatedAt: props?.updatedAt ?? faker.date.future()
  };
}
