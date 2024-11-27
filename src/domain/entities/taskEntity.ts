import { BaseEntity } from "./base";

export interface TaskEntity extends BaseEntity {
  taskDescription: string;
}
