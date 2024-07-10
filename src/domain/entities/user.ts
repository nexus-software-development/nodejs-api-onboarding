import { BaseEntity } from "./base";
import { RoleEnum } from "./role";

export interface User extends BaseEntity {
  name: string;
  password: string;
  email: string;
  roleValue: RoleEnum;
}
