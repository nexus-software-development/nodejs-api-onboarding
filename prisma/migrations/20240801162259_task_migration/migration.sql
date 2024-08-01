-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "is_checked" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tasks_text_key" ON "tasks"("text");

-- CreateIndex
CREATE INDEX "tasks_text_idx" ON "tasks"("text");
