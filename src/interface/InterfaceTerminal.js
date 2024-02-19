import React from 'react';

import Inventaire from './inventaire/Inventaire';
import Stat from './stat/Stat';

const InterfaceTerminal = () => {
  return (
    <div className='InterfaceTerminale' >
        <Inventaire />
        <Stat />
    </div>
  )
}

export default InterfaceTerminal