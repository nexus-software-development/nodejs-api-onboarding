import { ToDo } from "@domain/entities/todo";
import { applyDecorators } from "@nestjs/common";
import { ApiCreatedResponse, ApiProperty } from "@nestjs/swagger";

const TODO: ToDo = {
  id: 1,
  text: "Buy groceries",
  isCompleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
};

export class CreateToDoResponseDto {
  @ApiProperty({
    example: TODO
  })
  todo: ToDo;
}

export const CreateToDoResponse = applyDecorators(
  ApiCreatedResponse({
    description: "The ToDo item has been successfully created.",
    type: CreateToDoResponseDto
  })
);
