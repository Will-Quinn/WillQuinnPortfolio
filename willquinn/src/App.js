
import {NavLink,Routes,Route, BrowserRouter } from 'react-router-dom'
import React from 'react';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <BrowserRouter>
      <div className="tint"></div>
      {/* <div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
      </div> */}
              <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}