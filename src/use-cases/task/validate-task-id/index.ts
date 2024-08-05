import { ConflictException, Injectable } from "@nestjs/common";

@Injectable()
export class ValidateTaskIdUseCase {
  validate(id: string): number {
    const ID: number = Number(id);

    if (isNaN(ID))
      throw new ConflictException("Id da tarefa não corresponde a um número");

    return ID;
  }
}
