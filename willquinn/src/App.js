
import {Routes,Route, BrowserRouter } from 'react-router-dom'
import React from 'react';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import Projects from './routes/projects';
export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
    <div class="scrollbar" id="style-4">
      <div class="force-overflow"></div>
    </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}