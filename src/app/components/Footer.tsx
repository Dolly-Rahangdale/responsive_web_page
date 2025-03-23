import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer style={{ background: '#13111C', color: 'white', padding: '60px 0 30px' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="mb-4">
              <h4 
                style={{ 
                  fontFamily: 'Space Grotesk',
                  fontSize: '24px', 
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '16px'
                }}
              >
                ImiverseAI
              </h4>
              <p 
                style={{ 
                  fontSize: '14px',
                  opacity: 0.7,
                  lineHeight: '1.6',
                  fontWeight: 500,
                  maxWidth: '300px'
                }}
              >
                Experience the future of virtual reality with our cutting-edge platform. Explore immersive worlds and connect with others.
              </p>
            </div>
            <div className="social-icons d-flex gap-3 mb-4">
              <a 
                href="#" 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                <i className="bi bi-facebook">f</i>
              </a>
              <a 
                href="#" 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                <i className="bi bi-twitter">t</i>
              </a>
              <a 
                href="#" 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                <i className="bi bi-instagram">i</i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <h5 
              style={{ 
                fontFamily: 'Space Grotesk',
                fontSize: '18px', 
                fontWeight: 600,
                letterSpacing: '-0.02em',
                marginBottom: '20px'
              }}
            >
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'color 0.3s'
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/about" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'color 0.3s'
                  }}
                >
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/features" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'color 0.3s'
                  }}
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4">
            <h5 
              style={{ 
                fontFamily: 'Space Grotesk',
                fontSize: '18px', 
                fontWeight: 600,
                letterSpacing: '-0.02em',
                marginBottom: '20px'
              }}
            >
              Resources
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/docs" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'color 0.3s'
                  }}
                >
                  Documentation
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/support" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'color 0.3s'
                  }}
                >
                  Support
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/blog" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'color 0.3s'
                  }}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4">
            <h5 
              style={{ 
                fontFamily: 'Space Grotesk',
                fontSize: '18px', 
                fontWeight: 600,
                letterSpacing: '-0.02em',
                marginBottom: '20px'
              }}
            >
              Contact Us
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3" style={{ fontSize: '14px', opacity: 0.7 }}>
                <i className="bi bi-geo-alt me-2">📍</i> 123 VR Street, Digital City
              </li>
              <li className="mb-3" style={{ fontSize: '14px', opacity: 0.7 }}>
                <i className="bi bi-envelope me-2">✉️</i> info@imiverseai.com
              </li>
              <li className="mb-3" style={{ fontSize: '14px', opacity: 0.7 }}>
                <i className="bi bi-telephone me-2">📞</i> +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '30px 0' }} />
        <div className="row">
          <div className="col-md-6">
            <p 
              style={{ 
                fontSize: '14px',
                opacity: 0.7,
                marginBottom: 0
              }}
            >
              &copy; 2024 ImiverseAI. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link href="/privacy" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                textDecoration: 'none',
                fontSize: '14px',
                marginRight: '20px'
              }}
            >
              Privacy Policy
            </Link>
            <Link href="/terms" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
