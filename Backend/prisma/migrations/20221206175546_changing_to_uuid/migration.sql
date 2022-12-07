/*
  Warnings:

  - The primary key for the `properties` table will be changed. If it partially fails, the table could be left without primary key constraint.

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
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "offers_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_offers" ("brlPrice", "createdAt", "id", "price", "propertyId", "updatedAt", "wallet") SELECT "brlPrice", "createdAt", "id", "price", "propertyId", "updatedAt", "wallet" FROM "offers";
DROP TABLE "offers";
ALTER TABLE "new_offers" RENAME TO "offers";
CREATE TABLE "new_properties" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "currentPrice" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "sold" BOOLEAN NOT NULL DEFAULT false,
    "onSale" BOOLEAN NOT NULL DEFAULT false,
    "owner" TEXT NOT NULL
);
INSERT INTO "new_properties" ("createdAt", "currentPrice", "id", "onSale", "owner", "sold", "title", "type", "updatedAt") SELECT "createdAt", "currentPrice", "id", "onSale", "owner", "sold", "title", "type", "updatedAt" FROM "properties";
DROP TABLE "properties";
ALTER TABLE "new_properties" RENAME TO "properties";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
