-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL DEFAULT '',
    "status" VARCHAR(30) NOT NULL DEFAULT 'inactive',
    "logo" VARCHAR(255),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
