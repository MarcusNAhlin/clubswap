/*
  Warnings:

  - You are about to drop the column `category` on the `Post` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_name" TEXT NOT NULL,
    "pickup_location" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price_sek" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "brand" TEXT,
    "shaft" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Post_user_name_fkey" FOREIGN KEY ("user_name") REFERENCES "User" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("brand", "created_at", "description", "id", "pickup_location", "price_sek", "shaft", "title", "updated_at", "user_name") SELECT "brand", "created_at", "description", "id", "pickup_location", "price_sek", "shaft", "title", "updated_at", "user_name" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
