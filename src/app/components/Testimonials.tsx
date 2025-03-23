import React from 'react';
import Image from 'next/image';
import image1 from '../assets/images.jpeg';
import image2 from '../assets/images (1).jpeg';
import image3 from '../assets/images (2).jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'VR Developer',
      comment: 'Amazing platform for virtual reality development. The tools are intuitive and powerful.',
      image: image1
    },
    {
      name: 'Jane Smith',
      role: 'Game Designer',
      comment: 'The best platform I\'ve used for creating immersive gaming experiences.',
      image: image2
    },
    {
      name: 'Mike Johnson',
      role: 'Content Creator',
      comment: 'Incredible features and support. Makes creating VR content a breeze.',
      image: image3
    }
  ];

  return (
    <section className="testimonials-section py-5" style={{ background: '#13111C' }}>
      <div className="container">
        <h2 
          className="text-center text-white mb-5" 
          style={{ 
            fontFamily: 'Space Grotesk',
            fontSize: '36px',
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}
        >
          What our clients say
        </h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4">
              <div 
                className="testimonial-card" 
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  padding: '24px',
                  height: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="avatar me-3" 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '2px solid #13111C',
                      boxShadow: '0 0 0 2px rgba(176, 38, 255, 0.3)'
                    }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h5 
                      className="text-white mb-1" 
                      style={{ 
                        fontFamily: 'Space Grotesk',
                        fontSize: '18px',
                        fontWeight: 600,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {testimonial.name}
                    </h5>
                    <p 
                      className="text-white mb-0" 
                      style={{ 
                        fontSize: '14px',
                        opacity: 0.7,
                        fontWeight: 500
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p 
                  className="text-white mb-0" 
                  style={{ 
                    fontSize: '16px',
                    opacity: 0.7,
                    lineHeight: '1.6',
                    fontWeight: 500
                  }}
                >
                  {testimonial.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="row mt-5 pt-4">
          <div className="col-12">
            <div 
              className="newsletter-container" 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '30px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="row align-items-center">
                <div className="col-md-4">
                  <h3 
                    className="text-white mb-2" 
                    style={{ 
                      fontFamily: 'Space Grotesk',
                      fontSize: '24px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Newsletter
                  </h3>
                  <p 
                    className="text-white mb-0" 
                    style={{ 
                      fontSize: '14px',
                      opacity: 0.7,
                      lineHeight: '1.6',
                      fontWeight: 500
                    }}
                  >
                    Subscribe to our newsletter for updates and news.
                  </p>
                </div>
                <div className="col-md-8">
                  <div className="d-flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="form-control me-2" 
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: 'white',
                        padding: '10px 16px'
                      }}
                    />
                    <button 
                      className="btn" 
                      style={{
                        background: '#B026FF',
                        color: 'white',
                        borderRadius: '8px',
                        padding: '10px 20px',
                        fontWeight: 500,
                        border: 'none'
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
