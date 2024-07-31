import { applyDecorators } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";

export const ChangeTaskCheckResponse = applyDecorators(
  ApiOkResponse({
    description: "Tarefa alterada com sucesso!"
  })
);
