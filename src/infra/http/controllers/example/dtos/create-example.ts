import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateExampleDto {
  @ApiProperty({
    description: "Texto do Example",
    required: true
  })
  @IsString()
  @IsNotEmpty()
  text: string;
}
