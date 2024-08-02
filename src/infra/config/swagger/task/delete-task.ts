import { applyDecorators } from "@nestjs/common";
import { ApiCreatedResponse } from "@nestjs/swagger";

export const DeleteTaskResponse = applyDecorators(
  ApiCreatedResponse({
    description: "Tarefa deletada com sucesso!"
  })
);
