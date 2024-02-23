import React from 'react';

import ArrierePlan from './arrierePlan/ArrierePlan';
import Inventaire from './inventaire/Inventaire';
import Stat from './stat/Stat';
import Deplacement from './deplacement/Deplacement';

const InterfaceTerminal = () => {
  return (
    <div className='InterfaceTerminale' >
        <ArrierePlan />
        <Inventaire />
        <Stat />
        <Deplacement />
    </div>
  )
}

export default InterfaceTerminal