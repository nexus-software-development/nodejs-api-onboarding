import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CompleteTaskDto {
  @ApiProperty({
    description: "Task id"
  })
  @IsString()
  @IsNotEmpty()
  id: number;
}
