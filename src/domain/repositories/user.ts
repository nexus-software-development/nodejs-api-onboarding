import { RoleEnum } from "@domain/entities/role";

export interface CreateUserParams {
  name: string;
  email: string;
  role: RoleEnum;
  password: string;
}

export abstract class UserRepository {
  abstract create(params: CreateUserParams): Promise<void>;
}
