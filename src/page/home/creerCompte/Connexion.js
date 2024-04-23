import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import refreshStore from './refreshStore';

import './connexion.css';

import CreerCompte from './CreerCompte';

const Connexion = () => {

  const UrlOnline = 'https://mondedesentsback.onrender.com';
  const UrlLocal = 'http://localhost:5000';

  const storeRefresh = refreshStore();

  const navigate = useNavigate();

  const [pseudo, pseudoSet] = useState('');
  const [mdp, mdpSet] = useState('');
  const [avertissement, avertissementSet] = useState('');



  useEffect(() => {
    let timeout;
    if (avertissement !== '') {
      timeout = setTimeout(() => {
        avertissementSet('');
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [avertissement]);

  const seConnecter = async (pseudo, mdp) => {
    try {
      console.log(pseudo);
      const response = await fetch(`${UrlLocal}/compte/connexion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pseudo, mdp }),
      });

      if (response.ok) {
        // L'inscription a réussi, redirige vers une autre page ou montre un message de succès
        console.log('Connexion réussie !');
        sessionStorage.setItem('pseudo', pseudo);
        storeRefresh.ajouter('refresh', 1);
        storeRefresh.modifier('pseudo', pseudo);
        navigate('/');
      } else {
        // Il y a eu une erreur, traite-la
        const data = await response.json();
        avertissementSet(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      avertissementSet('Une erreur est survenue lors de l\'inscription');
    }
  }

  return (
    <div className='Connexion'>
      <CreerCompte />
      <div className="formulaire">
        <h3>Connexion</h3>
        <input type="text" placeholder='Votre pseudo' value={pseudo} onChange={(event) => {pseudoSet(event.target.value)}} />
        <input type="text" placeholder='Votre mot de passe' value={mdp} onChange={(event) => {mdpSet(event.target.value)}} />
        <button onClick={() => {seConnecter(pseudo, mdp)}}>Se connecter</button>
        {avertissement !== '' ? (
          <div className="avertissement">
            <p>{avertissement}</p>
          </div>
        ) :
          <div className="avertissement" style={{opacity: '0%', backgroundColor: 'transparent', color: 'transparent'}}>
            <p>okok</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Connexion;
