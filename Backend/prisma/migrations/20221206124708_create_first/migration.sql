-- CreateTable
CREATE TABLE "properties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "currentPrice" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "sold" BOOLEAN NOT NULL DEFAULT false,
    "onSale" BOOLEAN NOT NULL DEFAULT false,
    "owner" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "offers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "price" REAL NOT NULL,
    "wallet" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,
    CONSTRAINT "offers_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
