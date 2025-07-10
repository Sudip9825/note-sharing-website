import notesData from '../data/notesData';

export const getRelatedNotes = (currentNoteId) => {
  const currentNote = notesData.find(note => note.id === currentNoteId);

  if (!currentNote) {
    return [];
  }

  const relatedNotes = notesData.filter(note => 
    note.id !== currentNoteId && 
    (note.subject === currentNote.subject || 
     note.tags.split(', ').some(tag => currentNote.tags.split(', ').includes(tag)))
  );

  // Limit to a reasonable number of related notes, e.g., 3
  return relatedNotes.slice(0, 3);
};

export const updateNoteRating = (noteId, newRating) => {
  const note = notesData.find(note => note.id === noteId);
  if (note) {
    // In a real app, you'd likely average the new rating with existing ones.
    // For simplicity here, we'll just update it.
    note.rating = newRating;
  }
  return note;
};

export const addCommentToNote = (noteId, commentText, author) => {
  const note = notesData.find(note => note.id === noteId);
  if (note) {
    note.comments.push({ text: commentText, author });
  }
  return note;
};