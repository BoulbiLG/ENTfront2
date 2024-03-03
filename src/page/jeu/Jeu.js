import React from 'react';

import InterfaceTerminal from '../../interface/InterfaceTerminal';
import Particule from '../../components/particule/Particule';

import { verificationMusique } from '../../interface/deplacement/verificationMusique';

import refreshStore from '../../variableGlobal/global/refresh';

import './jeu.css';

const Jeu = () => {

  const storeRefresh = refreshStore();

  verificationMusique();

  return (
    <div className='Jeu'>
        <InterfaceTerminal />
    </div>
  )
}

export default Jeu