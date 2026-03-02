import ScrollProgress from './components/layout/ScrollProgres'
import NavBar from './components/pages/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Kontak from './components/pages/Kontak';
import Footer from './components/pages/Footer';

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
