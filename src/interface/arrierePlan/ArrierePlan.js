import { React, useState, useEffect } from 'react';

import './arrierePlan.css';

import { arrierePlanURL } from '../../graphisme/arrierePlan/URL';
import deplacementStore from '../../variableGlobal/global/deplacementStore';

const ArrierePlan = () => {



    // ==================== DECLARATION VARIABLE ==================== //



    const heroURL = 'https://image.noelshack.com/fichiers/2024/08/5/1708722354-dos.png';
    const storeDeplacement = deplacementStore();

    const position = `X${storeDeplacement.zoneX}Y${storeDeplacement.zoneY}Z${storeDeplacement.zoneZ}`;

    const [arrierePlan, arrierePlanSet] = useState('');

    useEffect(() => {
        const arrierePlanLigne = arrierePlanURL.find((colision) => colision.position === position);
        const arrierePlanBrut = arrierePlanLigne.url;
        arrierePlanSet(arrierePlanBrut);
    }, [position]);

    

    return (
        <div className='ArrierePlan'>
            <img className='arrierePlan' src={arrierePlan} alt={arrierePlan} />
            <img className='hero' src={heroURL} alt={heroURL} />
        </div>
    )
}

export default ArrierePlan