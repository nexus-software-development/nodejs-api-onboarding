import { applyDecorators } from "@nestjs/common";
import { ApiCreatedResponse } from "@nestjs/swagger";

export const CompleteTaskResponse = applyDecorators(
  ApiCreatedResponse({
    description: "Task concluída com sucesso!"
  })
);
