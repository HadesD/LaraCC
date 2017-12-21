CREATE TABLE articles
(
  id INTEGER PRIMARY KEY,
  slug TEXT,
  title TEXT,
  content TEXT,
  author_id INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME
);
