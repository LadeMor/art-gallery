import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Gallery from './pages/gallery/Gallery';
import ArtistsPage from './pages/artists-page/ArtistsPage';
import AboutMe from './pages/about-me/AboutMe';

function App() {
  return (
      <div className='container'>
        <div className='main-wrapper'>
          <Router>
            <Header/>
            <Routes>
              <Route path="/" element={<Gallery/>}/>
              <Route path="/artists" element={<ArtistsPage/>}/>
              <Route path="/about-me" element={<AboutMe/>}/>
            </Routes>
          </Router>
        </div>
      </div>
  );
}

export default App;
