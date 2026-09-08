CREATE TABLE IF NOT EXISTS notices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  language TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  weight INTEGER NOT NULL DEFAULT 0,
  create_time INTEGER NOT NULL DEFAULT (unixepoch() * 1000),
  update_time INTEGER NOT NULL DEFAULT (unixepoch() * 1000),
  is_del INTEGER NOT NULL DEFAULT 0 CHECK (is_del IN (0, 1)),
  CHECK (language IN ('en', 'zh-Hans', 'zh-Hant', 'ja', 'ms', 'ko', 'id', 'th', 'vi', 'ar'))
);

CREATE INDEX IF NOT EXISTS idx_notices_language_deleted
  ON notices(language, is_del);

CREATE INDEX IF NOT EXISTS idx_notices_weight_deleted
  ON notices(weight, is_del);
