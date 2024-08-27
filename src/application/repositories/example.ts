import { Example } from "@domain/entities/example";

export abstract class ExampleRepository {
  abstract create(text: string): Promise<void>;
  abstract findAll(): Promise<Example[]>;
}
