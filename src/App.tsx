import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Gallery from './pages/gallery/Gallery';
import GalleryList from './pages/gallery-list/GalleryList';
import AboutMe from './pages/about-me/AboutMe';
import Footer from './components/footer/Footer';

function App() {
  return (
          <Router>
            <Header/>
            <Routes>
              <Route path="/" element={<Gallery/>}/>
              <Route path="/gallery" element={<GalleryList/>}/>
              <Route path="/about-me" element={<AboutMe/>}/>
            </Routes>
            <Footer/>
          </Router>
  );
}

export default App;
