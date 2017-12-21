PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE articles
(
  id INTEGER PRIMARY KEY,
  title TEXT,
  content TEXT,
  author_id INTEGER
);
COMMIT;
