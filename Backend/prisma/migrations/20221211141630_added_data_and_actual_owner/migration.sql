-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cpf_tokens" (
    "tokenAddress" TEXT NOT NULL,
    "cpfOwner" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atual" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_cpf_tokens" ("cpfOwner", "tokenAddress") SELECT "cpfOwner", "tokenAddress" FROM "cpf_tokens";
DROP TABLE "cpf_tokens";
ALTER TABLE "new_cpf_tokens" RENAME TO "cpf_tokens";
CREATE UNIQUE INDEX "cpf_tokens_tokenAddress_key" ON "cpf_tokens"("tokenAddress");
CREATE UNIQUE INDEX "cpf_tokens_cpfOwner_key" ON "cpf_tokens"("cpfOwner");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
