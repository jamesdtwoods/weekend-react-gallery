CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');
  ('images/wilma_smilingl.jpg', 'Happy Wilma', 'Photo of my dog Wilma taken on the south coast of Lake Superior.');
  ('images/double_arch.jpg', 'The Double Arch', 'Photo of a geological arch taken at Arches National Park.');