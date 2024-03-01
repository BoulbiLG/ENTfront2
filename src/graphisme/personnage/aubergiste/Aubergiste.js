import React, { useState } from 'react';

import './aubergiste.css';

import FenetreAuberge from './FenetreAuberge';

const Aubergiste = () => {

  const [affichageFenetre, affichageFenetreSet] = useState('false');

  return (
    <div className='Aubergiste'>
        {affichageFenetre === 'true' ? (
          <img className="image" onClick={() => {affichageFenetreSet('true')}} />
        ) : <img className="image" onClick={() => {affichageFenetreSet('false')}} /> }
      <div className="fenetre">
        {affichageFenetre === 'true' ? (
          <FenetreAuberge />
        ) : null }
      </div>
    </div>
  )
}

export default Aubergiste