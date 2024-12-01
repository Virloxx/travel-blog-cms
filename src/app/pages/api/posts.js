// pages/api/posts.js
import db from '../../lib/db';

export default async (req, res) => {
  const { rows } = await db.query('SELECT * FROM posts');
  res.status(200).json(rows);
};
