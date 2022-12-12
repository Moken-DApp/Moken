/*
  Warnings:

  - You are about to drop the `cpf_tokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "cpf_tokens";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "owners" (
    "tokenAddress" TEXT NOT NULL,
    "cpfOwner" TEXT NOT NULL,
    "ownerAddress" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atual" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "owners_tokenAddress_key" ON "owners"("tokenAddress");
