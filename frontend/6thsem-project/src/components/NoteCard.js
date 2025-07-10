import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./NoteCard.css";

const NoteCard = ({ id, title, subject, tags, rating = 0 }) => {
  return (
    <Link to={`/note/${id}`} className="note-card-link">
      <div className="note-card">
        <h3>{title}</h3>
        <p>Subject: {subject}</p>
        <p>Tags: {tags}</p>
        <div className="note-card-rating">
          <span>{rating.toFixed(1)}</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
    </Link>
  );
};

export default memo(NoteCard);
