// /pages/api/auth/logout.js
import { serialize } from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Ustaw ciasteczko authToken na pustą wartość i natychmiastowe wygaśnięcie
  res.setHeader('Set-Cookie', serialize('authToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Używaj bezpiecznych ciasteczek w produkcji
    sameSite: 'strict',
    path: '/',
    expires: new Date(0), // Ustaw ciasteczko na natychmiastowe wygaśnięcie
  }));

  return res.status(200).json({ message: 'Logout successful' });
}
