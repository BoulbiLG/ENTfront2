import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './page/home/Home';
import Connexion from './page/home/creerCompte/Connexion';
import Inscription from './page/home/creerCompte/Inscription';
import Jeu from './page/jeu/Jeu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jeu" element={<Jeu />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        {/*<Route path="/inscription" element={<Inscription />} />*/}
      </Routes>
    </Router>
  );
}

export default App;