import { TaskEntity } from "@domain/entities/taskEntity";
import { applyDecorators } from "@nestjs/common";
import { ApiOkResponse, ApiProperty } from "@nestjs/swagger";

const TASK: TaskEntity = {
  id: 1,
  task: "Texto",
  createdAt: new Date(),
  updatedAt: new Date(),
  isCompleted: true
};

export class TaskReturnDto {
  @ApiProperty({
    example: [TASK, TASK]
  })
  tasks: TaskEntity[];
}

export const FindAllTasksResponse = applyDecorators(
  ApiOkResponse({
    description: "Todas as tasks foram encontradas",
    type: TaskReturnDto
  })
);
