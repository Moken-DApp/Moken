/*
  Warnings:

  - Added the required column `id` to the `owners` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_owners" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tokenAddress" TEXT NOT NULL,
    "cpfOwner" TEXT NOT NULL,
    "ownerAddress" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atual" BOOLEAN NOT NULL
);
INSERT INTO "new_owners" ("atual", "cpfOwner", "data", "ownerAddress", "tokenAddress") SELECT "atual", "cpfOwner", "data", "ownerAddress", "tokenAddress" FROM "owners";
DROP TABLE "owners";
ALTER TABLE "new_owners" RENAME TO "owners";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
