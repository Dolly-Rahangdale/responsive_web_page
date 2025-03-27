import React from 'react';
import Image from 'next/image';
import vrImage1 from '../assets/images (1).jpeg';
import vrImage3 from '../assets/download (1).jpeg';
import vrImage4 from '../assets/GettyImages-1405467489.jpg';
// import 'https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap';

export default function HeroSection() {
  return (
    <section className="hero-section" style={{ background: 'linear-gradient(180deg, #13111C 0%, #1D1A2F 100%)', minHeight: '70vh', paddingTop: '80px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1
              className="mb-4"
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'white'
              }}
            >
              Let&apos;s Explore<br />
              Three-Dimensional<br />
              <span style={{ color: 'white', opacity: 0.8 }}>visual</span>
            </h1>
            <p
              className="text-white mb-5"
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                maxWidth: '500px',
                opacity: 0.7
              }}
            >
              With virtual technology you can see the digital world
              feel more real and you can play the game with a new
              style.
            </p>
            <div className="d-flex gap-3 mb-5">
              <button
                className="btn px-4 py-2"
                style={{
                  background: '#B026FF',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 500,
                  border: 'none',
                  boxShadow: '0 0 15px rgba(176, 38, 255, 0.5)'
                }}
              >
                Get It Now
              </button>
              <button
                className="btn px-4 py-2"
                style={{
                  background: 'transparent',
                  color: 'white',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontSize: '16px',
                  fontWeight: 500,
                  transition: 'all 0.3s ease'
                }}
              >
                Explore Device
              </button>
            </div>
            <div className="online-users d-flex align-items-center">
              <div className="user-avatars d-flex">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="avatar"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      position: 'relative',
                      marginLeft: i === 1 ? 0 : '-10px',
                      border: '2px solid #13111C',
                      overflow: 'hidden',
                      backgroundColor: i === 1 ? '#FF5E7D' : i === 2 ? '#36B5FF' : i === 3 ? '#FFB443' : '#B026FF',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    { (
                      <Image
                        src={vrImage4}
                        alt={`User ${i}`}
                        fill
                        style={{
                          objectFit: 'cover',
                          opacity: 0.8
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="d-flex align-items-center">
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#B026FF',
                    marginLeft: '15px',
                    marginRight: '8px',
                    boxShadow: '0 0 8px #B026FF'
                  }}
                  className="pulse-effect"
                />
                <span
                  className="text-white"
                  style={{
                    fontSize: '14px',
                    opacity: 0.8,
                    fontWeight: 500
                  }}
                >
                  400k people online
                </span>
              </div>
            </div>
          </div>
          {/* ************* NEW EXPERIENCE SECTION ************* */}
      {/* <div className="position-relative w-100 mx-auto" style={{ maxWidth: '800px' }}> */}
  <div className="col-lg-6 position-relative">
       
        <div className="row align-items-center">
          <div className="col-md-6 position-relative">
            <div className="position-relative overflow-hidden w-100 shadow-lg image-gradient" style={{
              height: '420px',
              borderRadius: '50%',
              backgroundColor: '#6C4BD3',
              boxShadow: '0 10px 30px rgba(108, 75, 211, 0.5)'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at top, rgba(255, 0, 128, 0.2), transparent 70%)',
                zIndex: 1,
                pointerEvents: 'none'
              }} />
              <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 2 }}>
                <Image
                  src={vrImage4}
                  alt="VR Person"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'contrast(1.3) brightness(1.2) saturate(1.4) hue-rotate(5deg)'
                  }}
                  priority
                />
              </div>
            </div>
            <div className="position-absolute glow-ellipse" style={{
              top: '24px',
              left: '-6px',
              width: '104%',
              height: '76%',
              borderRadius: '50%',
              border: '2px solid rgba(216, 112, 255, 0.7)',
              transform: 'rotate(-20deg)',
              zIndex: 3,
              pointerEvents: 'none',
              boxShadow: '0 0 12px rgba(216, 112, 255, 0.3)'
            }} />
            <div className="position-absolute" style={{ top: '16px', right: '18px', zIndex: 4 }}>
              <span className="sparkle text-white" style={{ fontSize: '18px' }}>✨✨✨</span>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center gap-4">
            <div className="text-overlay" style={{
              background: 'rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(16px)',
              padding: '24px',
              borderRadius: '24px',
              boxShadow: '0 6px 20px rgba(255, 255, 255, 0.06)',
              maxWidth: '360px'
            }}>
              <h3 className="text-white mb-2" style={{ fontSize: '26px', fontWeight: '700' }}>Cinematic Virtual Reality</h3>
              <p className="text-white-50 mb-0" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                Let&apos;s be the best for more real and effective results.
              </p>
            </div>
            <div className="new-experience" style={{
              background: 'rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(16px)',
              padding: '24px',
              borderRadius: '24px',
              boxShadow: '0 6px 20px rgba(255, 255, 255, 0.06)',
              maxWidth: '360px'
            }}>
              <h4 className="text-white mb-2" style={{ fontSize: '22px', fontWeight: '700' }}>New Experience In Playing Game</h4>
              <p className="text-white-50 mb-0" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                You can try playing the game with a new style and of course a more real feel.
              </p>
            </div>
          </div>
        </div>
      </div>

          {/* ************* NEW EXPERIENCE SECTION ************* */}
          <div className="new-experience-section" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px 0',
            background: 'linear-gradient(180deg, #13111C 0%, #1D1A2F 100%)',
            position: 'relative',
            marginTop: '40px'
          }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 d-flex justify-content-center">
                  <div style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '400px' }}>
                    {/* Left VR Person Image */}
                    <div
                      className="vr-image-container glow-effect"
                      style={{
                        width: '220px',
                        height: '320px',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        zIndex: 2
                      }}
                    >
                      <Image
                        src={vrImage1}
                        alt="VR Person 1"
                        fill
                        style={{
                          objectFit: 'cover',
                          objectPosition: '50% 20%'
                        }}
                        priority
                        className="color-shift"
                      />
                    </div>

                    {/* Right VR Person Image */}
                    <div
                      className="vr-image-container glow-effect"
                      style={{
                        width: '220px',
                        height: '320px',
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        zIndex: 1
                      }}
                    >
                      <Image
                        src={vrImage3}
                        alt="VR Person 2"
                        fill
                        style={{
                          objectFit: 'cover',
                          objectPosition: '50% 30%'
                        }}
                        priority
                        className="color-shift"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3
                    className="text-white mb-4"
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontSize: '36px',
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    New Experience In Playing Games
                  </h3>
                  <p
                    className="text-white mb-4"
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.6,
                      opacity: 0.7,
                      maxWidth: '450px'
                    }}
                  >
                    You can try playing PC games with a new style, and of course you are the main character in your game and adventure in VR.
                  </p>
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
                    Get It Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
