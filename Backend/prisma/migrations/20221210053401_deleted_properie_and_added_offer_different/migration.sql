/*
  Warnings:

  - You are about to drop the `properties` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `offers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `brlPrice` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the column `propertyId` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the column `wallet` on the `offers` table. All the data in the column will be lost.
  - Added the required column `accessWallet` to the `offers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenAddress` to the `offers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `offers` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "properties_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "properties";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_offers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "price" REAL NOT NULL,
    "tokenAddress" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "accessWallet" TEXT NOT NULL
);
INSERT INTO "new_offers" ("createdAt", "id", "price", "updatedAt") SELECT "createdAt", "id", "price", "updatedAt" FROM "offers";
DROP TABLE "offers";
ALTER TABLE "new_offers" RENAME TO "offers";
CREATE UNIQUE INDEX "offers_id_key" ON "offers"("id");
CREATE UNIQUE INDEX "offers_tokenAddress_key" ON "offers"("tokenAddress");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
