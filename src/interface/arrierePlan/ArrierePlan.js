import { React, useState, useEffect } from 'react';

import './arrierePlan.css';

import { arrierePlanURL } from '../../graphisme/arrierePlan/URL';
import deplacementStore from '../../variableGlobal/global/deplacementStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';
import Personnage from '../../graphisme/personnage/Personnage';

import { analysePositionPNJ } from '../../fonction/analysePositionPNJ';

const ArrierePlan = () => {



    // ==================== DECLARATION VARIABLE ==================== //



    const [heroURL, heroURLSet] = useState('https://image.noelshack.com/fichiers/2024/08/5/1708722354-dos.png');
    const [analysePosition, analysePositionSet] = useState([]);
    const storeDeplacement = deplacementStore();
    const storeCelestin = CelestinStore();
    const comportement = storeCelestin.comportement;

    const position = `X${storeDeplacement.zoneX}Y${storeDeplacement.zoneY}Z${storeDeplacement.zoneZ}`;

    const [arrierePlan, arrierePlanSet] = useState('');

    const analysePositionBrut = analysePositionPNJ(storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ);
    console.log(analysePositionBrut);
        
    useEffect(() => {
        const arrierePlanLigne = arrierePlanURL.find((colision) => colision.position === position);
        const arrierePlanBrut = arrierePlanLigne.url;
        
        arrierePlanSet(arrierePlanBrut);
        analysePositionSet(analysePositionBrut);
    }, [position]);

    useEffect(() => {
        const animationMarcher = () => {
            if (comportement === 'marcher') {
                setTimeout(() => {
                    heroURLSet('https://image.noelshack.com/fichiers/2024/08/7/1708870088-dos.gif');
                }, 100);
            }
            if (comportement === '') {
                setTimeout(() => {
                    heroURLSet('https://image.noelshack.com/fichiers/2024/08/5/1708722354-dos.png');
                }, 100);
            }
        }

        animationMarcher();
    }, [comportement, heroURL]);

    

    return (
        <div className='ArrierePlan'>
            <img className='arrierePlan' src={arrierePlan} alt={arrierePlan} />
            <img className='hero' src={heroURL} alt={heroURL} />
            <div className="listePersonnage">
                {analysePosition.map((element, index) => (
                    <Personnage key={index} x={element.x} y={element.y} storePersonnage={element.store}/>
                ))}
            </div>
        </div>
    )
}

export default ArrierePlan