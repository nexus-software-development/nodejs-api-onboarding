import { ConflictException } from "@nestjs/common";
import { ValidateTaskIdUseCase } from ".";

describe("Validate Task Id UseCase", () => {
  let sun: ValidateTaskIdUseCase;

  beforeEach(async () => (sun = new ValidateTaskIdUseCase()));

  it("should return a number if ID is valid", () => {
    expect(sun.validate("12345")).toBe(12345);
  });

  it("should throw a ConflictException if ID is NaN", () => {
    expect(() => sun.validate("1234tst")).toThrow(ConflictException);
  });
});
