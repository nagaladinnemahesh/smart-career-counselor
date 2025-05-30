import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import "../styles/Dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUserEmail(decoded.email || 'User'); // fallback
    } catch (err) {
      console.error('Invalid token');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Smart Career Counselor</a>
          <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="container mt-5 text-center">
        <h1 className="display-5">Welcome back, <span className="text-primary">{userEmail}</span>!</h1>
        <p className="lead">This is your personal dashboard. Here you’ll find career insights, resume tips, ML results and more.</p>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Profile</h5>
                <p className="card-text">Update your career preferences, skills and goals.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Career Suggestions</h5>
                <p className="card-text">Get AI-powered career role suggestions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Resume Helper</h5>
                <p className="card-text">Upload your resume and get improvements using ML.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer mt-auto py-3 bg-light text-center">
        <div className="container">
          <span className="text-muted">© 2025 Smart Career Counselor. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
