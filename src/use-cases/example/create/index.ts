import { ExampleRepository } from "@domain/repositories/example";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateExampleUseCase {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async create(text: string): Promise<void> {
    return this.exampleRepository.create(text);
  }
}
