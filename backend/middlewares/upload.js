const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary if env vars are present
if (process.env.CLOUDINARY_CLOUD_NAME) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
}

// Determine storage mechanism
let storage;
if (process.env.CLOUDINARY_CLOUD_NAME) {
    storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: 'career-assessment-profiles',
            allowed_formats: ['jpg', 'jpeg', 'png', 'webp']
        }
    });
} else {
    storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const dir = process.env.UPLOAD_DIR || './uploads';
            if (!process.env.VERCEL && !fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            cb(null, dir);
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname).toLowerCase();
            cb(null, `user_${req.user.id}_${Date.now()}${ext}`);
        }
    });
}

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed.'), false);
};

module.exports = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB max
});