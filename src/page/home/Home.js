import React from 'react';
import { Link } from 'react-router-dom';

import CreerCompte from './creerCompte/CreerCompte';

import './home.css';

const Home = () => {



  // ==================== DECLARATION VARIABLE ==================== //

  

  return (
    <div className='Home'>


      {/* ========== TITRE ========== */}


      <div className="centralisationTitre">
        <div className="titre">
          <h1>RisiChiasse</h1>
          <p>Le monde des ENTs</p>
        </div>
      </div>


      {/* ========== JOUER ========== */}


      <div className="centralisationJouer">
        <div className="jouer">
          <Link to="/jeu">Jouer</Link>
          <Link to="/jeu">Nouvelle aventure</Link>
        </div>
      </div>


      {/* ========== COMPTE ========== */}


      <CreerCompte />


    </div>
  )
}

export default Home