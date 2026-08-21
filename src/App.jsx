import ScrollProgress from './components/layout/ScrollProgres'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import About from './pages/About';
import Gallery from './pages/Gallery';
import Kontak from './pages/Kontak';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <ScrollProgress />
      <NavBar />
      <Home />
      <About />
      <Gallery />
      <Kontak />
      <Footer />
    </>
  );
}

export default App
