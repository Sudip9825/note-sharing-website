import React, { useState } from "react";
import "./ContributorDashboard.css";

const ContributorDashboard = () => {
  // Dummy data for notes
  const [myNotes, setMyNotes] = useState([
    {
      id: 1,
      title: "React Hooks Cheatsheet",
      subject: "React",
      tags: "hooks, frontend",
      status: "published",
      folder: "React Notes",
    },
    {
      id: 2,
      title: "Node.js Best Practices",
      subject: "Backend",
      tags: "nodejs, express",
      status: "pending review",
      folder: "Backend Dev",
    },
    {
      id: 3,
      title: "CSS Flexbox Guide",
      subject: "CSS",
      tags: "css, layout",
      status: "draft",
      folder: "Frontend Basics",
    },
  ]);

  // Dummy data for folders
  const [folders, setFolders] = useState([
    { id: 1, name: "React Notes" },
    { id: 2, name: "Backend Dev" },
    { id: 3, name: "Frontend Basics" },
  ]);
  const [newFolderName, setNewFolderName] = useState("");

  const handleEdit = (noteId) => {
    console.log(`Edit note with ID: ${noteId}`);
    // In a real application, this would navigate to an edit page
  };

  const handleDelete = (noteId) => {
    console.log(`Delete note with ID: ${noteId}`);
    // In a real application, this would trigger a delete API call
    if (window.confirm("Are you sure you want to delete this note?")) {
      alert(`Note ${noteId} deleted (frontend simulation)`);
      setMyNotes(myNotes.filter((note) => note.id !== noteId));
    }
  };

  const handleAddFolder = () => {
    if (newFolderName.trim() !== "") {
      const newFolder = {
        id: folders.length + 1,
        name: newFolderName.trim(),
      };
      setFolders([...folders, newFolder]);
      setNewFolderName("");
    }
  };

  // Group notes by folder
  const notesByFolder = myNotes.reduce((acc, note) => {
    const folderName = note.folder || "Uncategorized"; // Default to 'Uncategorized' if no folder
    if (!acc[folderName]) {
      acc[folderName] = [];
    }
    acc[folderName].push(note);
    return acc;
  }, {});

  return (
    <div className="dashboard-container">
      <h1>Contributor Dashboard</h1>

      <section className="folder-management-section">
        <h2>My Folders</h2>
        <div className="add-folder-form">
          <input
            type="text"
            placeholder="New folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <button onClick={handleAddFolder}>Add Folder</button>
        </div>
        {folders.length === 0 ? (
          <p>No folders created yet.</p>
        ) : (
          <ul className="folder-list">
            {folders.map((folder) => (
              <li key={folder.id}>{folder.name}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="my-notes-section">
        <h2>My Uploaded Notes</h2>
        {Object.keys(notesByFolder).length === 0 ? (
          <p>You haven't uploaded any notes yet.</p>
        ) : (
          Object.keys(notesByFolder).map((folderName) => (
            <div key={folderName} className="notes-in-folder">
              <h3>Folder: {folderName}</h3>
              <table className="notes-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Subject</th>
                    <th>Tags</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {notesByFolder[folderName].map((note) => (
                    <tr key={note.id}>
                      <td>{note.title}</td>
                      <td>{note.subject}</td>
                      <td>{note.tags}</td>
                      <td>{note.status}</td>
                      <td>
                        <button
                          onClick={() => handleEdit(note.id)}
                          className="edit-btn"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(note.id)}
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default ContributorDashboard;
