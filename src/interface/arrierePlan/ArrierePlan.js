import { React, useState, useEffect } from 'react';

import './arrierePlan.css';

import { arrierePlanURL } from '../../graphisme/arrierePlan/URL';
import deplacementStore from '../../variableGlobal/global/deplacementStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';
import refreshStore from '../../variableGlobal/global/refresh';

import Personnage from '../../graphisme/personnage/Personnage';
import Stockage from '../../graphisme/stockage/Stockage';
import Aubergiste from '../../graphisme/personnage/aubergiste/Aubergiste';

import { analysePositionPNJ } from '../../fonction/analysePositionPNJ';
import { analysePositionStockage } from '../../fonction/stockage/analysePositionStockage';

const ArrierePlan = () => {



    // ==================== DECLARATION VARIABLE ==================== //



    const [heroURL, heroURLSet] = useState('https://image.noelshack.com/fichiers/2024/08/5/1708722354-dos.png');
    const [analysePosition, analysePositionSet] = useState([]);
    const [analysePositionStockageNet, analysePositionStockageNetSet] = useState([]);
    const storeDeplacement = deplacementStore();
    const storeCelestin = CelestinStore();
    const storeRefresh = refreshStore();
    const comportement = storeCelestin.comportement;

    const position = `X${storeDeplacement.zoneX}Y${storeDeplacement.zoneY}Z${storeDeplacement.zoneZ}`;

    const [arrierePlan, arrierePlanSet] = useState('');

    const analysePositionBrut = analysePositionPNJ(storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ);
    const analysePositionStockageBrut = analysePositionStockage(storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ, storeDeplacement.lieux);

    useEffect(() => {
        const arrierePlanLigne = arrierePlanURL.find((colision) => colision.position === position);
        const arrierePlanBrut = arrierePlanLigne.url;
        
        arrierePlanSet(arrierePlanBrut);
        analysePositionSet(analysePositionBrut);
        analysePositionStockageNetSet(analysePositionStockageBrut);
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
            <div className="listeStockage">
                {analysePositionStockageNet.map((element, index) => (
                    <Stockage 
                        key={index} 
                        height={element.height} 
                        width={element.width} 
                        img={element.img} 
                        x={element.x} 
                        y={element.y} 
                        type={element.type} 
                        id={element.id} 
                        stockageStore={element.store}
                        inventaireStockage={element.inventaire}
                    />
                ))}
            </div>
            {storeDeplacement.zoneX === 1 && storeDeplacement.zoneY === -3 && storeDeplacement.zoneZ === 999999 ? (
                <div className="aubergiste">
                    <Aubergiste />
                </div>
            ) : null }
        </div>
    )
}

export default ArrierePlan