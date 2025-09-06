import Note from "../models/note.js";

// GET all notes
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt: -1}); //newest first
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// GET notes by subject
export async function getNotesBySubject(req, res) {
  try {
    const { subjectName } = req.params;
    const trimmedSubjectName = subjectName.trim(); // Trim whitespace
    const notes = await Note.find({ subject: { $regex: new RegExp(trimmedSubjectName, 'i') } }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getNotesBySubject controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

//Get a note
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getAllNotes controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// CREATE a note
export async function createNote(req, res) {
  try {
    const { subject, description, fileType } = req.body;
    const filePath = req.file ? req.file.path : null; // Get the file path from multer
    const fileName = req.file ? req.file.filename : null;
    const fileSize = req.file ? req.file.size : null;

    if (!filePath) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const noteData = {
      subject,
      description,
      fileType,
      fileName,
      filePath,
      fileSize,
    };

    console.log('Note data before creating instance:', noteData);

    const note = new Note(noteData);
    console.log('Note instance before saving:', note);

    const savedNote = await note.save();
    console.log('Saved note to database:', savedNote);
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// UPDATE a note
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updateData = { title, content };

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// DELETE a note
export async function deleteNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    

    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
