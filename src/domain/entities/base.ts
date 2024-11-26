import { randomUUID } from "crypto";

export class BaseEntity {
  id: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = randomUUID();
    this.isActive = true;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
