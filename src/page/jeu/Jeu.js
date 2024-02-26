import React from 'react';

import InterfaceTerminal from '../../interface/InterfaceTerminal';

import { verificationMusique } from '../../interface/deplacement/verificationMusique';

import refreshStore from '../../variableGlobal/global/refresh';

import './jeu.css';

const Jeu = () => {

  const storeRefresh = refreshStore();

  console.log(storeRefresh);



  verificationMusique();

  return (
    <div className='Jeu'>
        <InterfaceTerminal />
    </div>
  )
}

export default Jeu