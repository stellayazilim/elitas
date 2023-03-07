-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Admin',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
