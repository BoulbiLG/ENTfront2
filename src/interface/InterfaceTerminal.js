import React, { useEffect } from 'react';

import ArrierePlan from './arrierePlan/ArrierePlan';
import Inventaire from './inventaire/Inventaire';
import Stat from './stat/Stat';
import Deplacement from './deplacement/Deplacement';
import Base from './base/Base';
import Parametre from './parametre/Parametre';
import FenetreCombat from './combat/FenetreCombat';

import refreshStore from '../variableGlobal/global/refresh';

const InterfaceTerminal = () => {

  const { refresh } = refreshStore();

  useEffect(() => {
    console.log('rafraichissement')
  }, [refresh]);

  return (
    <div className='InterfaceTerminale' >
        <ArrierePlan />
        <Inventaire />
        <Base />
        <Stat />
        <Parametre />
        <Deplacement />
        <FenetreCombat />
    </div>
  )
}

export default InterfaceTerminal