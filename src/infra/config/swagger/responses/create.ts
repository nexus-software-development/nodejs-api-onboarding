import { applyDecorators } from "@nestjs/common";
import { ApiCreatedResponse } from "@nestjs/swagger";

export const CreateExampleResponse = applyDecorators(
  ApiCreatedResponse({
    description: "Exemplo criado com sucesso!"
  })
);
