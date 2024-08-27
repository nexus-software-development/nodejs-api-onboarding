import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateToDoDto {
  @ApiProperty({
    description: "Texto do ToDo",
    required: true
  })
  @IsString()
  @IsNotEmpty()
  text: string;
}
