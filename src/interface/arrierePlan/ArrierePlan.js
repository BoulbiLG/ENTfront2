import { React, useState, useEffect } from 'react';

import './arrierePlan.css';

import { arrierePlanURL } from '../../graphisme/arrierePlan/URL';
import deplacementStore from '../../variableGlobal/global/deplacementStore';

const ArrierePlan = () => {



    // ==================== DECLARATION VARIABLE ==================== //

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
            <img src={arrierePlan} alt={arrierePlan} />
        </div>
    )
}

export default ArrierePlan