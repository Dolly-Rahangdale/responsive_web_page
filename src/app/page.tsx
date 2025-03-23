'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div style={{ background: '#13111C', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
