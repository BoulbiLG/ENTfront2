import React from 'react';
import { Link } from 'react-router-dom';

import CreerCompte from './creerCompte/CreerCompte';

import titre from '../../asset/site internet/image/logo2.png';

import './home.css';

const Home = () => {



  // ==================== DECLARATION VARIABLE ==================== //

  

  return (
    <div className='Home'>


      <CreerCompte />


      {/* ========== TITRE ========== */}


      {/*
      <div className="centralisationTitre">
        <div className="titre">
          <h1>Onche Cinématique Univers</h1>
          <img src={titre} alt={titre} />
        </div>
      </div>
      */}


      {/* ========== JOUER ========== */}

      {/*
      <div className="centralisationJouer">
        <div className="jouer">
          <Link to="/jeu">Jouer</Link>
          <Link to="/jeu">Nouvelle aventure</Link>
        </div>
      </div>
      */}


      {/* ========== COMPTE ========== */}


    </div>
  )
}

export default Home