import React, { useState } from 'react';

import './aubergiste.css';

import normal from '../../../asset/personnage/captain404/normal.png';

import FenetreAuberge from './FenetreAuberge';

const Aubergiste = () => {

  const [affichageFenetre, affichageFenetreSet] = useState('false');

  return (
    <div className='Aubergiste'>
      {affichageFenetre === 'false' ? (
        <img className='perso' src={normal} alt="personnage" onClick={() => {affichageFenetreSet('true')}}/>
      ) : null }
      {affichageFenetre === 'true' ? (
        <img className='perso' src={normal} alt="personnage" onClick={() => {affichageFenetreSet('false')}}/>
      ) : null }
      <div className="fenetre">
        {affichageFenetre === 'true' ? (
          <FenetreAuberge />
        ) : null }
      </div>
    </div>
  )
}

export default Aubergiste