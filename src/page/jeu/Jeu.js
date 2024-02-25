import React from 'react';

import InterfaceTerminal from '../../interface/InterfaceTerminal';

import { verificationMusique } from '../../interface/deplacement/verificationMusique';

import './jeu.css';

const Jeu = () => {

  verificationMusique();

  return (
    <div className='Jeu'>
        <InterfaceTerminal />
    </div>
  )
}

export default Jeu