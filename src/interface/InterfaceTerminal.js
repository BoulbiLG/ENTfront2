import React, { useEffect } from 'react';

import ArrierePlan from './arrierePlan/ArrierePlan';
import Inventaire from './inventaire/Inventaire';
import Stat from './stat/Stat';
import Deplacement from './deplacement/Deplacement';
import Base from './base/Base';
import Parametre from './parametre/Parametre';
import FenetreCombat from './combat/FenetreCombat';
import Sauvegarde from './sauvegarde/Sauvegarde';

import refreshStore from '../variableGlobal/global/refresh';
import combatStore from '../variableGlobal/global/combatStore';

const InterfaceTerminal = () => {

  const storeCombat = combatStore();

  const { refresh } = refreshStore();
  const { combat } = combatStore();

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
    </div>
  )
}

export default InterfaceTerminal