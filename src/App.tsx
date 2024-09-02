import './App.css';
import Header from './components/header/Header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Gallery from './pages/gallery/Gallery';
import GalleryList from './pages/gallery-list/GalleryList';
import ContactUs from './pages/contact-us/ContactUs';
import Footer from './components/footer/Footer';

function App() {
  return (
          <Router>
            <Header/>
            <Routes>
              <Route path="/" element={<Gallery/>}/>
              <Route path="/gallery" element={<GalleryList/>}/>
              <Route path="/contact-us" element={<ContactUs/>}/>
            </Routes>
            <Footer/>
          </Router>
  );
}

export default App;
