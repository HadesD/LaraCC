CREATE TABLE articles
(
  id INTEGER PRIMARY KEY,

  slug TEXT,

  -- 0/NULL: Normal Article
  -- 1: Video
  -- 2: Image
  -- 3: Quote
  type SMALLINT DEFAULT 0 NOT NULL,

  title TEXT,

  featured TEXT,

  content TEXT,

  author_id INTEGER,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE accounts
(
  id INTEGER PRIMARY KEY,

  name TEXT,

  username TEXT,

  passowrd TEXT,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

