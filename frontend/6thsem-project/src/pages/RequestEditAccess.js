import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './RequestEditAccessForm.css';

const RequestEditAccess = () => {
  const { id } = useParams();
  const [reason, setReason] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend API
    console.log(`Request to edit note ${id}:`, { reason, contact });
    setMessage('Your edit request has been submitted!');
    setReason('');
    setContact('');
  };

  return (
    <div className="request-edit-access-container">
      <h2>Request Edit Access for Note ID: {id}</h2>
      <form onSubmit={handleSubmit} className="request-edit-form">
        <div className="form-group">
          <label htmlFor="reason">Reason for editing:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Email/Phone:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default RequestEditAccess;