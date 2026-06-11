import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';

function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white selection:bg-accent selection:text-dark">
      {/* Cinematic Custom Cursor */}
      <CustomCursor />

      {/* Atmosphere, Noise Overlay & Floating Neon Blobs */}
      <BackgroundEffect />

      {/* Main Layout Elements */}
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
