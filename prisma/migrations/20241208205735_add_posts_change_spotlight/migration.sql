/*
  Warnings:

  - You are about to drop the column `content` on the `Spotlight` table. All the data in the column will be lost.
  - You are about to drop the column `img_url` on the `Spotlight` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Spotlight` table. All the data in the column will be lost.
  - Added the required column `post_id` to the `Spotlight` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "thumbnail_img" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "edited_at" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Spotlight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "post_id" INTEGER NOT NULL
);
INSERT INTO "new_Spotlight" ("id") SELECT "id" FROM "Spotlight";
DROP TABLE "Spotlight";
ALTER TABLE "new_Spotlight" RENAME TO "Spotlight";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
