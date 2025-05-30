// File: src/pages/HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Smart Career Counselor</a>
          <div className="ml-auto">
            <button
              className="btn btn-light me-2"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className="btn btn-outline-light"
              onClick={() => navigate('/signup')}
            >
              Signup
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero text-center text-white d-flex align-items-center">
        <div className="container">
          <h1 className="display-4">Plan Your Career with Confidence</h1>
          <p className="lead">AI-powered personalized career counseling for students and professionals.</p>
          <button className="btn btn-light mt-3" onClick={() => navigate('/signup')}>
            Get Started
          </button>
        </div>
      </header>

      {/* Features */}
      <section className="features py-5">
        <div className="container text-center">
          <h2>Why Choose Us?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <h5>🧠 AI Recommendations</h5>
              <p>We analyze your skills, interests, and trends to give tailored advice.</p>
            </div>
            <div className="col-md-4">
              <h5>📊 Track Progress</h5>
              <p>Monitor your growth and stay motivated with your personalized dashboard.</p>
            </div>
            <div className="col-md-4">
              <h5>👥 Multiple User Types</h5>
              <p>Whether you're a student or a working professional, we’ve got you covered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-1">&copy; 2025 Smart Career Counselor. All rights reserved.</p>
          <small>Developed by Mahesh Nagaladinne</small>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
