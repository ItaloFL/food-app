/*
  Warnings:

  - Added the required column `image` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "imageURL" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_fkey" FOREIGN KEY ("category") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
