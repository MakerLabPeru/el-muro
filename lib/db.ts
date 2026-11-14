import { DatabaseSync } from "node:sqlite";

export type Post = {
  id: number;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: string;
};

const db = new DatabaseSync("muro.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author_id TEXT NOT NULL,
    author_name TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

const examplePosts = [
  ["ejemplo-ana", "Ana", "¡Hola, muro! Primer post del sábado."],
  ["ejemplo-luis", "Luis", "Alguien sabe si hoy hay café en MakerLab?"],
  ["ejemplo-rosa", "Rosa", "COMPRA SEGUIDORES BARATOS en mi link!!!"],
];

const { total } = db.prepare("SELECT COUNT(*) AS total FROM posts").get() as { total: number };
if (total === 0) {
  const insert = db.prepare("INSERT INTO posts (author_id, author_name, text) VALUES (?, ?, ?)");
  for (const post of examplePosts) insert.run(...post);
}

export function listPosts(): Post[] {
  return db
    .prepare(
      `SELECT id, author_id AS authorId, author_name AS authorName, text, created_at AS createdAt
       FROM posts ORDER BY id DESC`,
    )
    .all() as Post[];
}

export function addPost(authorId: string, authorName: string, text: string) {
  db.prepare("INSERT INTO posts (author_id, author_name, text) VALUES (?, ?, ?)").run(authorId, authorName, text);
}

export default db;
