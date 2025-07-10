import React, { useState } from "react";
import "./UploadForm.css";
import notesData from "../data/notesData";

const Upload = ({ setNotes }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState("");
  const [folder, setFolder] = useState(""); // New state for selected folder
  const [newFolderName, setNewFolderName] = useState(""); // New state for new folder name
  const [error, setError] = useState("");
  const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB

  // Dummy folders data (in a real app, this would be fetched from Contributor's folders)
  const dummyFolders = [
    { id: 1, name: "React Notes" },
    { id: 2, name: "Backend Dev" },
    { id: 3, name: "Frontend Basics" },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "image/jpeg",
        "image/png",
      ];
      if (!allowedTypes.includes(file.type)) {
        setError("Invalid file type. Only PDF, PPT, JPG, and PNG are allowed.");
        setSelectedFile(null);
        return;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        setError("File size exceeds 15MB limit.");
        setSelectedFile(null);
        return;
      }

      setError("");
      setSelectedFile(file);
    }
  };

  const handleAddFolder = () => {
    if (newFolderName.trim() !== "") {
      // In a real app, you'd send this to a backend to create a new folder
      // For now, we'll just set it as the selected folder
      setFolder(newFolderName.trim());
      setNewFolderName("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }
    if (!folder && !newFolderName) {
      setError("Please select an existing folder or create a new one.");
      return;
    }

    const newNote = {
      id: String(notesData.length + 1), // Simple unique ID generation
      title,
      subject,
      tags,
      folder: folder || newFolderName,
      content: `This is the content for ${title}.`,
      author: 'Current User', // Placeholder
      uploadDate: new Date().toISOString().slice(0, 10),
      fileUrl: '#', // Placeholder
    };

    setNotes(prevNotes => [...prevNotes, newNote]);

    alert("File uploaded successfully!");
    // Reset form
    setSelectedFile(null);
    setTitle("");
    setSubject("");
    setTags("");
    setFolder("");
    setNewFolderName("");
    setError("");
  };

  return (
    <div className="upload-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        <h2>Upload New Note</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="file">Select File</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept=".pdf,.ppt,.pptx,.jpg,.png"
          />
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="folder">Select Folder</label>
          <select
            id="folder"
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
          >
            <option value="">-- Select an existing folder --</option>
            {dummyFolders.map((f) => (
              <option key={f.id} value={f.name}>
                {f.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="newFolder">Or Create New Folder</label>
          <input
            type="text"
            id="newFolder"
            placeholder="New folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <button type="button" onClick={handleAddFolder}>
            Create & Select
          </button>
        </div>
        <button type="submit">Upload Note</button>
      </form>
    </div>
  );
};

export default Upload;
