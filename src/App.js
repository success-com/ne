import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css"
import Nav from "./components/Nav"
import Home from "./components/Home"
import SecondHome from "./components/SecondHome"
import Footer from "./components/Footer"
import Messages from "./components/Messages"
import vidBackground from "./vidbg-1.mp4"
//import './VideoBackground.css'; // Import your CSS file for styling

function VideoBackground() {
  return (
    <div className="video-background">
      <video autoPlay muted="false" loop>
        <source src={vidBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Other content */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
         
    </div>
  );
}

function App() {
  
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.style.overflow = 'hidden';

    // Enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []); // Empty dependency array ensures effect is only run once

  return (<VideoBackground /> );
}

function Layout() {
  return (
    <div className="container">
      <Nav />
      <Outlet />
     <Footer />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
