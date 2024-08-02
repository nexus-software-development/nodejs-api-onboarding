import { Task } from "@prisma/client";
import { applyDecorators } from "@nestjs/common";
import { ApiOkResponse, ApiProperty } from "@nestjs/swagger";

const TASK: Task = {
  id: 1021821,
  text: "Texto"
} as Task;

export class FindAllTasksResponseDto {
  @ApiProperty({
    example: [TASK, TASK]
  })
  tasks: Task[];
}

export const FindAllTasksResponse = applyDecorators(
  ApiOkResponse({
    description: "Todas as suas tarefas foram encontrados!",
    type: FindAllTasksResponseDto
  })
);
