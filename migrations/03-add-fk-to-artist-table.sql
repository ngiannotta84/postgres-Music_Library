ALTER TABLE Album
ADD COLUMN artist_id INTEGER NOT NULL REFERENCES Artists(id) ON DELETE CASCADE;