import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ background: '#13111C', padding: '24px 0' }}>
      <div className="container">
        <Link 
          href="/" 
          className="navbar-brand text-white" 
          style={{ 
            fontFamily: 'Space Grotesk',
            fontSize: '28px', 
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}
        >
          IMMVERSEAI
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link 
                href="/" 
                className="nav-link" 
                style={{ 
                  color: '#B026FF',
                  fontSize: '16px',
                  marginRight: '40px',
                  fontWeight: 500
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/company" 
                className="nav-link text-white" 
                style={{ 
                  fontSize: '16px',
                  marginRight: '40px',
                  opacity: 0.8,
                  fontWeight: 500
                }}
              >
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/features" 
                className="nav-link text-white" 
                style={{ 
                  fontSize: '16px',
                  marginRight: '40px',
                  opacity: 0.8,
                  fontWeight: 500
                }}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <button 
                className="btn px-4 py-2" 
                style={{ 
                  background: '#B026FF',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 500,
                  border: 'none'
                }}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
