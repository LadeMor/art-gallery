import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Gallery from './pages/gallery/Gallery';
import ArtistsPage from './pages/artists-page/ArtistsPage';
import AboutMe from './pages/about-me/AboutMe';
import Footer from './components/footer/Footer';

function App() {
  return (
          <Router>
            <Header/>
            <Routes>
              <Route path="/" element={<Gallery/>}/>
              <Route path="/artists" element={<ArtistsPage/>}/>
              <Route path="/about-me" element={<AboutMe/>}/>
            </Routes>
            <Footer/>
          </Router>
  );
}

export default App;
