import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';
import './Home.css';

const Home = ({ notes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredNotes(notes);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const results = notes.filter(note =>
        note.title.toLowerCase().includes(lowercasedQuery) ||
        note.subject.toLowerCase().includes(lowercasedQuery) ||
        note.tags.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredNotes(results);
    }
  };

  const featuredNotes = notes.slice(0, 3);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Get Better Grades, Together</h1>
          <p>Find the best study resources, shared by your fellow students.</p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Find</h3>
            <p>Search for notes by course, subject, or keyword.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Learn</h3>
            <p>Download and study with high-quality, peer-reviewed notes.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Share</h3>
            <p>Upload your own notes and help other students.</p>
          </div>
        </div>
      </section>

      {/* Display filtered notes if a search query exists, otherwise display featured notes */}
      <section className="featured-notes-section">
        <h2>{searchQuery ? 'Search Results' : 'Top Rated Notes'}</h2>
        <div className="notes-grid">
          {(searchQuery ? filteredNotes : featuredNotes).map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              subject={note.subject}
              tags={note.tags}
              rating={note.rating}
            />
          ))}
          {searchQuery && filteredNotes.length === 0 && <p>No notes found matching your search.</p>}
        </div>
      </section>

      

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Our Community</h2>
        <p>Become a part of our growing community and start sharing your notes today!</p>
        <button className="cta-button" onClick={() => window.location.href='/signup'}>Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;