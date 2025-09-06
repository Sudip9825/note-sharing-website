import express from 'express';
import upload from '../middleware/uploadNotes.js'; // multer middleware
import Note from '../models/note.js'; // Mongoose model for notes
import { createNote, getAllNotes, getNoteById, updateNote, deleteNote, getNotesBySubject } from '../controllers/notesController.js';

const router = express.Router();

// POST /api/notes - Upload a note
router.post('/', upload.single('note'), createNote);

// GET /api/notes/subjects - Get all unique subjects
router.get('/subjects', async (req, res) => {
  try {
    const subjects = await Note.distinct('subject'); // get unique subjects from DB
    res.status(200).json({ subjects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// GET /api/notes/subject/:subjectName - Get notes by subject
router.get('/subject/:subjectName', getNotesBySubject);

// GET /api/notes - Get all notes
router.get('/', getAllNotes);

// GET /api/notes/subject/:subjectName - Get notes by subject
router.get('/subject/:subjectName', getNotesBySubject);

// Test route
router.get('/test', (req, res) => {
  res.send('Test route works!');
});

// GET /api/notes/:id - Get a single note by ID
router.get('/:id', getNoteById);

// PUT /api/notes/:id - Update a note by ID
router.put('/:id', updateNote);

// DELETE /api/notes/:id - Delete a note by ID
router.delete('/:id', deleteNote);

export default router;
