import React from 'react';

import CreerCompte from '../home/creerCompte/CreerCompte';
import { useNavigate } from 'react-router-dom';

import './profil.css';

import refreshStore from '../home/creerCompte/refreshStore';

const Profil = () => {

  const storeRefresh = refreshStore();
  const { pseudo } = refreshStore();

  const navigate = useNavigate();

  console.log(pseudo);
  if (pseudo == '') {
    console.log(pseudo, 'ytgrvf');
    navigate('/');
  }

  const deconnexion = () => {
    storeRefresh.modifier('pseudo', '');
    sessionStorage.removeItem('pseudo');
    navigate('/');
  }
  
  return (
    <div className='Profil'>
        <CreerCompte />
        <div className="information">
          <p>{pseudo}</p>
          <button onClick={() => {deconnexion();}}>Déconnexion</button>
        </div>
    </div>
  )
}

export default Profil