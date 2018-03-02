CREATE TABLE accounts
(
  id INTEGER PRIMARY KEY,

  name TEXT,

  email TEXT UNIQUE,

  password TEXT,

  -- 0: Banned
  -- 1: Founder
  -- 2: Member
  role SMALLINT DEFAULT 2,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articles
(
  id INTEGER PRIMARY KEY,

  slug TEXT UNIQUE,

  -- 0/NULL: Normal Article
  -- 1: Video
  -- 2: Image
  -- 3: Quote
  type SMALLINT DEFAULT 0,

  title TEXT,

  featured TEXT,

  content TEXT,

  author_id INTEGER,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

