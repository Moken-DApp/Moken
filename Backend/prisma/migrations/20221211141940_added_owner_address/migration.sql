/*
  Warnings:

  - Added the required column `ownerAddress` to the `cpf_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cpf_tokens" (
    "tokenAddress" TEXT NOT NULL,
    "cpfOwner" TEXT NOT NULL,
    "ownerAddress" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atual" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_cpf_tokens" ("atual", "cpfOwner", "data", "tokenAddress") SELECT "atual", "cpfOwner", "data", "tokenAddress" FROM "cpf_tokens";
DROP TABLE "cpf_tokens";
ALTER TABLE "new_cpf_tokens" RENAME TO "cpf_tokens";
CREATE UNIQUE INDEX "cpf_tokens_tokenAddress_key" ON "cpf_tokens"("tokenAddress");
CREATE UNIQUE INDEX "cpf_tokens_cpfOwner_key" ON "cpf_tokens"("cpfOwner");
CREATE UNIQUE INDEX "cpf_tokens_ownerAddress_key" ON "cpf_tokens"("ownerAddress");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
