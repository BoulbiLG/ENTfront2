import React, { useEffect } from 'react';

import InterfaceTerminal from '../../interface/InterfaceTerminal';
import Particule from '../../components/particule/Particule';
import parametreStore from '../../variableGlobal/global/parametreStore';
import musiqueStore from '../../variableGlobal/audio/musiqueStore';

import { verificationMusique } from '../../interface/deplacement/verificationMusique';

import refreshStore from '../../variableGlobal/global/refresh';

import './jeu.css';

const Jeu = () => {

  const storeRefresh = refreshStore();
  const storeMusique = musiqueStore();
  const { courante } = musiqueStore();
  const storeParemetre = parametreStore();
  const { volumeMusique } = parametreStore();

  useEffect(() => {
    verificationMusique(storeMusique, storeParemetre);
  }, [volumeMusique, courante, storeMusique.courante]);


  return (
    <div className='Jeu'>
        <InterfaceTerminal />
    </div>
  )
}

export default Jeu