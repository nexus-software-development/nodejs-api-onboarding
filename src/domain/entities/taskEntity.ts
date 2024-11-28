import { BaseEntity } from "./base";

export interface TaskEntity extends BaseEntity {
  task: string;
  isCompleted: boolean;
}
