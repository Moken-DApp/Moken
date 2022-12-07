/*
  Warnings:

  - Added the required column `brlPrice` to the `offers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_offers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "price" REAL NOT NULL,
    "wallet" TEXT NOT NULL,
    "brlPrice" REAL NOT NULL,
    "propertyId" INTEGER NOT NULL,
    CONSTRAINT "offers_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_offers" ("createdAt", "id", "price", "propertyId", "updatedAt", "wallet") SELECT "createdAt", "id", "price", "propertyId", "updatedAt", "wallet" FROM "offers";
DROP TABLE "offers";
ALTER TABLE "new_offers" RENAME TO "offers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
