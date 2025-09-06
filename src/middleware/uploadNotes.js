import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Create uploads directory if it doesn't exist
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter for images and PDFs
const fileFilter = (req, file, cb) => {
  const extname = /jpeg|jpg|png|pdf/.test(path.extname(file.originalname).toLowerCase());

  // Correctly check MIME type
  const mimetype =
    file.mimetype === 'application/pdf' || file.mimetype.startsWith('image/');

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only .jpeg, .jpg, .png and .pdf formats allowed!'));
  }
};

// Multer upload config
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 25 }, // 25MB
});

export default upload;
