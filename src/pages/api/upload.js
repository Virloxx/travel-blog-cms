// pages/api/upload.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to clear the uploads directory
const clearUploadsDirectory = () => {
  const uploadDir = path.join(process.cwd(), 'public/uploads');

  if (fs.existsSync(uploadDir)) {
    // Get all files in the directory
    const files = fs.readdirSync(uploadDir);

    // Delete each file
    for (const file of files) {
      fs.unlinkSync(path.join(uploadDir, file));
    }
  }
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Clear existing files before handling the new upload
    clearUploadsDirectory();

    upload.single('file')(req, res, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ data: 'success' });
    });
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
}
