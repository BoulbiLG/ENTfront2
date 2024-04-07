import React, { useEffect } from 'react';

import ArrierePlan from './arrierePlan/ArrierePlan';
import Inventaire from './inventaire/Inventaire';
import Stat from './stat/Stat';
import Deplacement from './deplacement/Deplacement';
import Base from './base/Base';
import Parametre from './parametre/Parametre';
import FenetreCombat from './combat/FenetreCombat';
import Sauvegarde from './sauvegarde/Sauvegarde';
import Cinematique from './cinematique/Cinematique';

import refreshStore from '../variableGlobal/global/refresh';
import combatStore from '../variableGlobal/global/combatStore';
import cinematiqueStore from '../variableGlobal/global/cinematiqueStore';

const InterfaceTerminal = () => {

  const storeCombat = combatStore();
  const storeCinematique = cinematiqueStore();

  const { refresh } = refreshStore();
  const { combat } = combatStore();
  const { cinematique } = cinematiqueStore();

  useEffect(() => {
    console.log('rafraichissement')
  }, [refresh, storeCombat.combat, combat]);

  return (
    <div className='InterfaceTerminale' >
        <ArrierePlan />
        <Inventaire />
        <Base />
        <Stat />
        <Parametre />
        <Sauvegarde />
        <Deplacement />
        <FenetreCombat />
        <Cinematique />
    </div>
  )
}

export default InterfaceTerminal