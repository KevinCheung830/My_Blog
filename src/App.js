import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Coding from './pages/Coding';
import ACGColle from './pages/ACGColle';
import MainNavigation from './Component/layout/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ACGColle" element={<ACGColle />} />
        <Route path="/Coding" element={<Coding />} />
      </Routes>

    </div>
  );
}

export default App;