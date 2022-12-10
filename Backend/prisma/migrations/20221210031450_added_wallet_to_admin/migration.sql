-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_admins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "wallet" TEXT NOT NULL DEFAULT '0x0000000000000000000000000000000000000000'
);
INSERT INTO "new_admins" ("createdAt", "email", "id", "name", "password", "updatedAt") SELECT "createdAt", "email", "id", "name", "password", "updatedAt" FROM "admins";
DROP TABLE "admins";
ALTER TABLE "new_admins" RENAME TO "admins";
CREATE UNIQUE INDEX "admins_id_key" ON "admins"("id");
CREATE UNIQUE INDEX "admins_name_key" ON "admins"("name");
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");
CREATE UNIQUE INDEX "admins_wallet_key" ON "admins"("wallet");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
