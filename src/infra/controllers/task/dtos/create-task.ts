import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto {
  @ApiProperty({
    description: "Task description"
  })
  @IsString()
  @IsNotEmpty()
  taskDescription: string;
}
