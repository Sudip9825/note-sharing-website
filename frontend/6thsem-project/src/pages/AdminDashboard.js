import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  // Dummy data for all notes
  const allNotes = [
    {
      id: 1,
      title: "React Hooks Cheatsheet",
      subject: "React",
      tags: "hooks, frontend",
      author: "Contributor A",
      status: "published",
    },
    {
      id: 2,
      title: "Node.js Best Practices",
      subject: "Backend",
      tags: "nodejs, express",
      author: "Contributor B",
      status: "pending review",
    },
    {
      id: 3,
      title: "CSS Flexbox Guide",
      subject: "CSS",
      tags: "css, layout",
      author: "Contributor A",
      status: "draft",
    },
    {
      id: 4,
      title: "Python for Data Science",
      subject: "Data Science",
      tags: "python, pandas",
      author: "Contributor C",
      status: "published",
    },
  ];

  // Dummy data for pending requests
  const pendingRequests = [
    {
      id: 1,
      type: "Edit Access",
      noteId: 2,
      noteTitle: "Node.js Best Practices",
      requester: "User X",
    },
    { id: 2, type: "Member Role", requester: "User Y" },
  ];

  // Dummy data for users
  const users = [
    { id: 1, name: "Admin User", email: "admin@example.com", role: "Admin" },
    {
      id: 2,
      name: "Contributor A",
      email: "contributorA@example.com",
      role: "Contributor",
    },
    { id: 3, name: "User X", email: "userX@example.com", role: "Normal" },
    { id: 4, name: "User Y", email: "userY@example.com", role: "Normal" },
  ];

  const handleNoteEdit = (noteId) => {
    console.log(`Admin edit note with ID: ${noteId}`);
    // Navigate to an admin-specific note edit page
  };

  const handleNoteDelete = (noteId) => {
    console.log(`Admin delete note with ID: ${noteId}`);
    if (window.confirm("Are you sure you want to delete this note?")) {
      alert(`Note ${noteId} deleted by Admin (frontend simulation)`);
    }
  };

  const handleApproveRequest = (requestId) => {
    console.log(`Approve request with ID: ${requestId}`);
    alert(`Request ${requestId} approved (frontend simulation)`);
  };

  const handleRejectRequest = (requestId) => {
    console.log(`Reject request with ID: ${requestId}`);
    alert(`Request ${requestId} rejected (frontend simulation)`);
  };

  const handleManageUser = (userId) => {
    console.log(`Manage user with ID: ${userId}`);
    // Navigate to a user management page/modal
  };

  const handleDeleteUser = (userId) => {
    console.log(`Delete user with ID: ${userId}`);
    if (window.confirm("Are you sure you want to delete this user?")) {
      alert(`User ${userId} deleted (frontend simulation)`);
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>

      <section className="admin-section">
        <h2>All Notes</h2>
        {allNotes.length === 0 ? (
          <p>No notes available.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Author</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allNotes.map((note) => (
                <tr key={note.id}>
                  <td>{note.title}</td>
                  <td>{note.subject}</td>
                  <td>{note.author}</td>
                  <td>{note.status}</td>
                  <td>
                    <button
                      onClick={() => handleNoteEdit(note.id)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleNoteDelete(note.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="admin-section">
        <h2>Pending Requests</h2>
        {pendingRequests.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Details</th>
                <th>Requester</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.type}</td>
                  <td>
                    {request.type === "Edit Access"
                      ? `Note: ${request.noteTitle}`
                      : "N/A"}
                  </td>
                  <td>{request.requester}</td>
                  <td>
                    <button
                      onClick={() => handleApproveRequest(request.id)}
                      className="approve-btn"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleRejectRequest(request.id)}
                      className="reject-btn"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="admin-section">
        <h2>User Management</h2>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      onClick={() => handleManageUser(user.id)}
                      className="manage-btn"
                    >
                      Manage
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
