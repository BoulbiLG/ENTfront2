import React, { useState } from 'react';

import './conseil.css';
import '../../css/classe/fenetre1.css';

import chocoratStore from '../../variableGlobal/global/chocoratStore';

const Conseil = () => {

    const storeChocorat = chocoratStore();

    /*
    const [conseil, conseilSet] = useState('');

    if (storeChocorat.conseil == '') {
        co
    */

    let conseil = '';

    return (
        <div className='Conseil fenetre2Classe'>
            <p>{conseil}</p>
        </div>
    )
}

export default Conseil