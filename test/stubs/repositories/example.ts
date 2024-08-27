import { Example } from "@domain/entities/example";
import { ExampleRepository } from "@application/repositories/example";

export class ExampleRepositoryStub implements ExampleRepository {
  async create(): Promise<void> {
    return;
  }

  async findAll(): Promise<Example[]> {
    return [];
  }
}
