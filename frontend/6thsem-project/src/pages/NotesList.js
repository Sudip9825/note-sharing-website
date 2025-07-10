import React from "react";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";
import "./NotesList.css";

import notesData from "../data/notesData";

const NotesList = ({ notes }) => {
  

  // Group notes by folder
  const notesByFolder = notes.reduce((acc, note) => {
    const folderName = note.folder || "Uncategorized"; // Default to 'Uncategorized' if no folder
    if (!acc[folderName]) {
      acc[folderName] = [];
    }
    acc[folderName].push(note);
    return acc;
  }, {});

  return (
    <div className="notes-list-container">
      <h1>All Notes</h1>
      <SearchBar />
      {Object.keys(notesByFolder).length === 0 ? (
        <p>No notes available.</p>
      ) : (
        Object.keys(notesByFolder).map((folderName) => (
          <div key={folderName} className="notes-folder-section">
            <h2>{folderName}</h2>
            <div className="notes-grid">
              {notesByFolder[folderName].map((note) => (
                <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  subject={note.subject}
                  tags={note.tags}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
