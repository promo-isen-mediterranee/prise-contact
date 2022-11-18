-- CreateTable
CREATE TABLE "Salon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "formations" TEXT NOT NULL,
    "code_postal" TEXT NOT NULL,
    "origine" TEXT NOT NULL,
    "origine_type" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
