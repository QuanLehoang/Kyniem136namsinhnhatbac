import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Guestbook from './components/Guestbook';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FallingPetals from './components/FallingPetals';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-vn-red selection:text-white">
      <FallingPetals />
      <Header />

      <main>
        <Hero />
        <Timeline />
        <Gallery />
        <Guestbook />
      </main>

      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
