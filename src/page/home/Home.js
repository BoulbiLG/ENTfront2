import React from 'react';
import { Link } from 'react-router-dom';

import CreerCompte from './creerCompte/CreerCompte';

import './home.css';

const Home = () => {



  // ==================== DECLARATION VARIABLE ==================== //

  

  return (
    <div className='Home'>
      <Link to="/jeu">jouer</Link>
      <CreerCompte />
    </div>
  )
}

export default Home