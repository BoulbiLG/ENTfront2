import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './page/home/Home';
import Connexion from './page/home/creerCompte/Connexion';
import Inscription from './page/home/creerCompte/Inscription';
import Jeu from './page/jeu/Jeu';
import JeuVideo from './page/jeuVideo/JeuVideo';
import Profil from './page/profil/Profil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/risiworld" element={<Jeu />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/jeu-video" element={<JeuVideo />} />
        <Route path="/profil" element={<Profil />} />
        {/*<Route path="/inscription" element={<Inscription />} />*/}
      </Routes>
    </Router>
  );
}

export default App;