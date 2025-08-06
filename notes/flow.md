
---
# 📦 Express Backend Notes — One File Setup (Cloudinary + MongoDB)

## ✅ Setup Steps

- Install dependencies: `express`, `mongoose`, `dotenv`, `cloudinary`
- Create `.env` file with:
  - `PORT`
  - `MONGO_URI`
  - `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET`

---

## 🧠 Application Flow (inside `index.js`)

- Import required packages
- Load `.env` variables using `dotenv`
- Initialize Express app
- Apply middleware:
  - `express.json()` for JSON parsing
- Configure Cloudinary with credentials
- Connect MongoDB using `mongoose.connect()`
- Define Mongoose Schema for `Image`
- Create `/upload` route:
  - Accept base64 image from `req.body.image`
  - Upload to Cloudinary
  - Save image URL + public ID to MongoDB
  - Return JSON response
- Start server with `app.listen(PORT)`

---



















---

### 🧾 `index.js` — One File Wonderland

```js
// 🌱 Load environment variables
require('dotenv').config();

// 🚀 Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

const app = express();
app.use(express.json()); // Parse JSON requests

// 🔐 Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// 🧬 MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('🟢 MongoDB connected'))
.catch(err => console.error('🔴 DB error:', err));

// 🧠 Mongoose model
const ImageSchema = new mongoose.Schema({
  url: String,
  public_id: String
}, { timestamps: true });

const Image = mongoose.model('Image', ImageSchema);

// 🔀 API Route — Upload Image
app.post('/upload', async (req, res) => {
  try {
    // Expect image as base64 string in req.body.image
    const result = await cloudinary.uploader.upload(req.body.image, {
      folder: 'himanshu_uploads'
    });

    const newImage = new Image({
      url: result.secure_url,
      public_id: result.public_id
    });

    await newImage.save();

    res.status(201).json({ message: 'Uploaded 🎉', data: newImage });
  } catch (err) {
    console.error('❌ Upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// 🚀 Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Server running at http://localhost:${PORT}`));
```

---

### 🧪 Sample `.env`

```env
PORT=3000
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
MONGO_URI=your_mongodb_uri
```

---

