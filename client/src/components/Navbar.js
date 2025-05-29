import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link>
      <Link to="/login">Login</Link>
    </nav>
    )
}

export default Navbar;