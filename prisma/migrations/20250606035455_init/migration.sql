-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('administrador', 'ciudadano');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('Pendiente', 'Activo', 'Inactivo');

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "type" "UserType" NOT NULL,
    "names" VARCHAR(100) NOT NULL,
    "father_lastname" VARCHAR(100) NOT NULL,
    "mother_lastname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(260) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "phone" VARCHAR(10) NOT NULL,
    "recovery_token" TEXT,
    "token_exp" TIMESTAMP(3),
    "profile_picture" TEXT,
    "registration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account_status" "AccountStatus" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_recovery_token_key" ON "User"("recovery_token");
