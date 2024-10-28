import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change Switch to Routes
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Recommendation from "./Components/Recommendation";
import { Singapore, Thailand, Paris, NewZealand, BoraBora, London } from './Components/Destinations'; // Import your destination components
import Classes from "./Styles/Footer.module.css";

function App() {
  return (
    <Router>
      <div className={Classes.app}>
        <ScrollToTop />
        <NavBar />
        <Hero />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Recommendation />} /> {/* Use element prop */}
          <Route path="/singapore" element={<Singapore />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/paris" element={<Paris />} />
          <Route path="/new-zealand" element={<NewZealand />} />
          <Route path="/bora-bora" element={<BoraBora />} />
          <Route path="/london" element={<London />} />
        </Routes>
        <Service />
        <Testimonials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;