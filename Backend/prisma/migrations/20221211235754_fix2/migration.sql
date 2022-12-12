/*
  Warnings:

  - You are about to alter the column `atual` on the `cpf_tokens` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cpf_tokens" (
    "tokenAddress" TEXT NOT NULL,
    "cpfOwner" TEXT NOT NULL,
    "ownerAddress" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atual" BOOLEAN NOT NULL
);
INSERT INTO "new_cpf_tokens" ("atual", "cpfOwner", "data", "ownerAddress", "tokenAddress") SELECT "atual", "cpfOwner", "data", "ownerAddress", "tokenAddress" FROM "cpf_tokens";
DROP TABLE "cpf_tokens";
ALTER TABLE "new_cpf_tokens" RENAME TO "cpf_tokens";
CREATE UNIQUE INDEX "cpf_tokens_tokenAddress_key" ON "cpf_tokens"("tokenAddress");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
