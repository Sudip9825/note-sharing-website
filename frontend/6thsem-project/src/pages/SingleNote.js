import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import notesData from '../data/notesData';
import { getRelatedNotes, updateNoteRating, addCommentToNote } from '../utils/noteUtils';
import CommentSection from '../components/CommentSection';
import './SingleNote.css';

const SingleNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState(notesData.find(note => note.id === id));
  const [userRating, setUserRating] = useState(0);

  // Mock user role - in a real app, this would come from auth context
  const isContributor = true;

  const relatedNotes = getRelatedNotes(id);

  const handleRating = (rating) => {
    setUserRating(rating);
    const updatedNote = updateNoteRating(id, rating);
    setNote(updatedNote);
  };

  const handleCommentSubmit = (noteId, commentText) => {
    const updatedNote = addCommentToNote(noteId, commentText, 'ContributorUser'); // Mock user
    setNote(updatedNote);
  };

  if (!note) {
    return <div className="single-note-container">Note not found.</div>;
  }

  return (
    <div className="single-note-container">
      <h1>{note.title}</h1>
      <p><strong>Subject:</strong> {note.subject}</p>
      <p><strong>Tags:</strong> {note.tags}</p>
      <p><strong>Author:</strong> {note.author}</p>
      <p><strong>Uploaded On:</strong> {note.uploadDate}</p>
      <div className="note-rating">
        <strong>Rating:</strong> {note.rating.toFixed(1)}
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= (userRating || note.rating) ? 'star-filled' : 'star-empty'}
              onClick={() => handleRating(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <div className="note-content">
        <h3>Content:</h3>
        <p>{note.content}</p>
      </div>
      <a href={note.fileUrl} target="_blank" rel="noopener noreferrer" className="download-link">
        Download File
      </a>
      <button className="share-button">Share Note</button>
      <Link to={`/request-edit/${note.id}`} className="request-edit-button">
        Request Edit
      </Link>

      <CommentSection
        noteId={id}
        comments={note.comments}
        onCommentSubmit={handleCommentSubmit}
        isContributor={isContributor}
      />

      {relatedNotes.length > 0 && (
        <div className="related-notes">
          <h3>Related Notes:</h3>
          <ul>
            {relatedNotes.map(relatedNote => (
              <li key={relatedNote.id}>
                <Link to={`/note/${relatedNote.id}`}>{relatedNote.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleNote;