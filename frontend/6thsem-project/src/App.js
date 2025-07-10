import React, { Suspense, lazy, useState } from "react";
import notesData from "./data/notesData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Upload = lazy(() => import("./pages/Upload"));
const NotesList = lazy(() => import("./pages/NotesList"));
const SingleNote = lazy(() => import("./pages/SingleNote"));
const ContributorDashboard = lazy(() => import("./pages/ContributorDashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const RequestEditAccess = lazy(() => import("./pages/RequestEditAccess"));

// A simple loading fallback component
const LoadingFallback = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h2>Loading...</h2>
  </div>
);

function App() {
  const [notes, setNotes] = useState(notesData);

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home notes={notes} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<Upload setNotes={setNotes} />} />
          <Route path="/notes" element={<NotesList notes={notes} />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/dashboard" element={<ContributorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/request-edit/:id" element={<RequestEditAccess />} />
        </Routes>
      </Suspense>
      <footer className="app-footer">
        <p>&copy; 2025 NoteShare. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
