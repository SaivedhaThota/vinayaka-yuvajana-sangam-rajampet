const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔑 change this password for admin delete
const ADMIN_PASSWORD = "vinayaka123";

// Serve static files from public folder
app.use(express.static('public'));
app.use(express.json());

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Setup multer storage for uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/uploads'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// 📌 Upload endpoint
app.post('/upload', upload.single('photo'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    res.json({ success: true, file: 'uploads/' + req.file.filename });
});

// 📌 Get all photos
app.get('/photos', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) return res.status(500).json({ error: 'Unable to scan files' });
        const filePaths = files.map(f => 'uploads/' + f);
        res.json(filePaths);
    });
});

// 📌 Delete a photo (Admin only)
app.delete('/photos/:filename', (req, res) => {
    const { password } = req.body;
    if (password !== ADMIN_PASSWORD) {
        return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const filePath = path.join(uploadDir, req.params.filename);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        res.json({ success: true, message: "Photo deleted" });
    } else {
        res.status(404).json({ success: false, message: "File not found" });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
