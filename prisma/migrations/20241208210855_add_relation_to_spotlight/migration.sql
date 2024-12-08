-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Spotlight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "post_id" INTEGER NOT NULL,
    CONSTRAINT "Spotlight_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Spotlight" ("id", "post_id") SELECT "id", "post_id" FROM "Spotlight";
DROP TABLE "Spotlight";
ALTER TABLE "new_Spotlight" RENAME TO "Spotlight";
CREATE UNIQUE INDEX "Spotlight_post_id_key" ON "Spotlight"("post_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
