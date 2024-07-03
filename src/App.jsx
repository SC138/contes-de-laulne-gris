import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FestivalSTYX from './pages/FestivalSTYX';
import Association from './pages/Association';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/festival-styx" element={<FestivalSTYX />} />
            <Route path="/association" element={<Association />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
