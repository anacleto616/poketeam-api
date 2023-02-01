-- CreateTable
CREATE TABLE "poketeams" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pokemon" TEXT[],

    CONSTRAINT "poketeams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "poketeams_name_key" ON "poketeams"("name");
