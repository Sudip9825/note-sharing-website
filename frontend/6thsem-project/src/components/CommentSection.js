import React, { useState } from 'react';
import './CommentSection.css';

const CommentSection = ({ noteId, comments, onCommentSubmit, isContributor }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onCommentSubmit(noteId, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p className="comment-author">{comment.author}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      {isContributor && (
        <form onSubmit={handleSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            rows="3"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CommentSection;
