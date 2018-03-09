CREATE TABLE accounts
(
  id INTEGER PRIMARY KEY,

  name TEXT,

  email TEXT UNIQUE,

  password TEXT,

  /**
   * Role and Permission
   * 0: Banned
   * 1: Founder
   * 2: Member
   */
  role SMALLINT DEFAULT 2,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articles
(
  id INTEGER PRIMARY KEY,

  slug TEXT UNIQUE NOT NULL,

  /**
   * Article Type
   * 0/NULL: Normal
   * 1: Today I Learn
   * 2: Quote
   * 3: Video
   * 4: Image
   */
  type SMALLINT DEFAULT 0,

  title TEXT NOT NULL,

  featured TEXT,

  content TEXT NOT NULL,

  author_id INTEGER,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

