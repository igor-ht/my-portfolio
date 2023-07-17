-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cardUrl" TEXT NOT NULL,
    "cardText" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "picUrl" TEXT NOT NULL,
    "techTags" TEXT[],
    "text" TEXT NOT NULL,
    "liveUrl" TEXT NOT NULL,
    "repoUrl" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skills_src_key" ON "Skills"("src");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_alt_key" ON "Skills"("alt");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_title_key" ON "Skills"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_name_key" ON "Skills"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_name_key" ON "Projects"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_cardUrl_key" ON "Projects"("cardUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_cardText_key" ON "Projects"("cardText");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_videoUrl_key" ON "Projects"("videoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_picUrl_key" ON "Projects"("picUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_text_key" ON "Projects"("text");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_liveUrl_key" ON "Projects"("liveUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_repoUrl_key" ON "Projects"("repoUrl");

