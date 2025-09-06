import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import notesRoutes from './routes/notesRoutes.js';
import path from 'path';

const app = express();
app.use(cors());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://sushantadhikari09_db_user:vGdnu6N6xvA2GLRf@cluster0.pup8msr.mongodb.net/note_db?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Routes
app.use('/api/notes', notesRoutes);

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



