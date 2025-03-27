import React from 'react';
import Image from 'next/image';
import image1 from '../assets/GettyImages-1405467489.jpg';
import image2 from '../assets/download (1).jpeg';
import image3 from '../assets/images (1).jpeg';
import image4 from '../assets/images (2).jpeg';

const Features = () => {
  const topFeatures = [
    {
      title: 'Virtual Reality Experience',
      description: 'Experience immersive virtual worlds with cutting-edge VR technology',
      image: image1,
      icon: '🎮'
    },
    {
      title: 'Interactive Gaming',
      description: 'Engage in interactive gaming experiences with real-time feedback',
      image: image2,
      icon: '🎯'
    }
  ];

  const bottomFeatures = [
    {
      title: 'Social Connection',
      description: 'Connect with others in virtual spaces and share experiences',
      image: image3,
      icon: '🌐'
    },
    {
      title: 'Educational Platform',
      description: 'Learn and explore through interactive virtual environments',
      image: image4,
      icon: '📚'
    }
  ];

  return (
    <>
      {/* First Features Section */}
      <section className="features-section py-5" style={{ background: '#13111C' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 
              className="text-white mb-2" 
              style={{ 
                fontFamily: 'Space Grotesk',
                fontSize: '36px', 
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
            >
              Awesome experiences with
            </h2>
            <h3 
              className="text-white" 
              style={{ 
                fontFamily: 'Space Grotesk',
                fontSize: '28px', 
                fontWeight: 500,
                opacity: 0.7,
                letterSpacing: '-0.02em'
              }}
            >
              virtual reality world
            </h3>
          </div>

          {/* Top row features */}
          <div className="row g-4 mb-4">
            {topFeatures.map((feature, index) => (
              <div key={index} className="col-md-6">
                <div 
                  className="feature-card" 
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '280px',
                    position: 'relative',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div 
                    className="feature-icon" 
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      width: '40px',
                      height: '40px',
                      background: 'rgba(176, 38, 255, 0.2)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      zIndex: 2
                    }}
                  >
                    {feature.icon}
                  </div>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <div 
                    className="feature-content p-4" 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)'
                    }}
                  >
                    <h5 
                      className="text-white mb-2" 
                      style={{ 
                        fontFamily: 'Space Grotesk',
                        fontSize: '20px', 
                        fontWeight: 600,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {feature.title}
                    </h5>
                    <p 
                      className="text-white mb-0" 
                      style={{ 
                        fontSize: '14px', 
                        opacity: 0.7, 
                        lineHeight: 1.6,
                        fontWeight: 500
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hero Experience Banner */}
          <div className="row mb-4">
            <div className="col-12">
              <div 
                className="hero-experience" 
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '200px',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 30px'
                }}
              >
                <div className="row align-items-center w-100">
                  <div className="col-md-8">
                    <h3 
                      className="text-white mb-2" 
                      style={{ 
                        fontFamily: 'Space Grotesk',
                        fontSize: '28px', 
                        fontWeight: 700,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      New Experience in Reality World
                    </h3>
                    <p 
                      className="text-white mb-3" 
                      style={{ 
                        fontSize: '14px', 
                        opacity: 0.7, 
                        lineHeight: 1.6,
                        fontWeight: 500,
                        maxWidth: '500px'
                      }}
                    >
                      Let&apos;s explore the limitless possibilities of virtual reality with our cutting-edge technology.
                    </p>
                    <button 
                      className="btn px-4 py-2" 
                      style={{ 
                        background: '#B026FF',
                        color: 'white',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 500,
                        border: 'none'
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                  <div className="col-md-4 position-relative" style={{ height: '180px' }}>
                    <Image
                      src={image2}
                      alt="VR Experience"
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row features */}
          <div className="row g-4">
            {bottomFeatures.map((feature, index) => (
              <div key={index} className="col-md-6">
                <div 
                  className="feature-card" 
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '280px',
                    position: 'relative',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div 
                    className="feature-icon" 
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      width: '40px',
                      height: '40px',
                      background: 'rgba(176, 38, 255, 0.2)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      zIndex: 2
                    }}
                  >
                    {feature.icon}
                  </div>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <div 
                    className="feature-content p-4" 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)'
                    }}
                  >
                    <h5 
                      className="text-white mb-2" 
                      style={{ 
                        fontFamily: 'Space Grotesk',
                        fontSize: '20px', 
                        fontWeight: 600,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {feature.title}
                    </h5>
                    <p 
                      className="text-white mb-0" 
                      style={{ 
                        fontSize: '14px', 
                        opacity: 0.7, 
                        lineHeight: 1.6,
                        fontWeight: 500
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Banner Section */}
      <section className="banner-section py-5" style={{ background: '#13111C' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div 
                className="banner" 
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '180px',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 30px'
                }}
              >
                <div className="row align-items-center w-100">
                  <div className="col-md-8">
                    <h3 
                      className="text-white mb-2" 
                      style={{ 
                        fontFamily: 'Space Grotesk',
                        fontSize: '28px', 
                        fontWeight: 700,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      Maximize productivity with Virtual Reality tools
                    </h3>
                    <p 
                      className="text-white mb-0" 
                      style={{ 
                        fontSize: '14px', 
                        opacity: 0.7, 
                        lineHeight: 1.6,
                        fontWeight: 500,
                        maxWidth: '500px'
                      }}
                    >
                      Enhance your workflow and collaboration with our immersive VR solutions.
                    </p>
                  </div>
                  <div className="col-md-4 position-relative" style={{ height: '120px' }}>
                    <Image
                      src={image1}
                      alt="VR Productivity"
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
