import React, { useState, useEffect } from 'react';

import './deplacement.css';

import deplacementStore from '../../variableGlobal/global/deplacementStore';
import colisionStore from '../../variableGlobal/global/colisionStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';
import miniMapStore from '../../variableGlobal/global/miniMap';

import { verificationMusique } from './verificationMusique';

import MiniMap from './MiniMap';

const Deplacement = () => {



    // ==================== DECLARATION VARIABLE ==================== //

    const storeDeplacement = deplacementStore();
    const storeColision = colisionStore();
    const storeCelestin = CelestinStore();
    const storeMiniMap = miniMapStore();

    const position = `X${storeDeplacement.zoneX}Y${storeDeplacement.zoneY}Z${storeDeplacement.zoneZ}`;
    
    const [mouvementChoix, setMouvementChoix] = useState([]);
    const [refreshLocal, refreshLocalSet] = useState(0);

    useEffect(() => {
        const colision = storeColision.find((colision) => colision.position === position);
        const nouveauxMouvements = colision ? colision.mouvement : [];
        setMouvementChoix(nouveauxMouvements);
    }, [storeColision, position]);



    // ==================== DECLARATION VARIABLE ==================== //



    const marcher = async (direction) => {
        setMouvementChoix([]);
        storeCelestin.modifier('comportement', 'marcher');

        const miniMapX = 16.5;
        const miniMapY = 9.5;
      
        await new Promise((resolve) => {
          setTimeout(() => {
            if (direction === 'monter') {storeDeplacement.ajouter('zoneZ', 1); storeMiniMap.ajouter('z', 1); refreshLocalSet(prevValue => prevValue + 1);}
            if (direction === 'haut') {storeDeplacement.ajouter('zoneY', 1); storeMiniMap.ajouter('y', miniMapY); refreshLocalSet(prevValue => prevValue + 1);}
            if (direction === 'descendre') {storeDeplacement.retirer('zoneZ', 1); storeMiniMap.retirer('z', 1); refreshLocalSet(prevValue => prevValue + 1);}
            if (direction === 'gauche') {storeDeplacement.retirer('zoneX', 1); storeMiniMap.ajouter('x', miniMapX); refreshLocalSet(prevValue => prevValue + 1);}
            if (direction === 'bas') {storeDeplacement.retirer('zoneY', 1); storeMiniMap.retirer('y', miniMapY); refreshLocalSet(prevValue => prevValue + 1);}
            if (direction === 'droite') {storeDeplacement.ajouter('zoneX', 1); storeMiniMap.retirer('x', miniMapX); refreshLocalSet(prevValue => prevValue + 1);}
            resolve();
          }, 500);
        });
      
        storeCelestin.modifier('comportement', '');
    };



    return (
        <div className="limitation">
            <div className='Deplacement'>
                    <div className="haut">

                        {mouvementChoix.includes('monter') ? (
                            <button className='activer' onClick={() => {marcher('monter')}}>Monter</button>
                        ) : (<button className='desactiver'>Monter</button>)}

                        {mouvementChoix.includes('haut') ? (
                            <button className='activer' onClick={() => {marcher('haut')}}><span class="material-symbols-outlined">arrow_upward</span></button>
                        ) : (<button className='desactiver'><span class="material-symbols-outlined">arrow_upward</span></button>)}

                        {mouvementChoix.includes('descendre') ? (
                            <button className='activer' onClick={() => {marcher('descendre')}}>Descendre</button>
                        ) : (<button className='desactiver'>Descendre</button>)}

                    </div>
                    <div className="bas">

                        {mouvementChoix.includes('gauche') ? (
                            <button className='activer' onClick={() => {marcher('gauche')}}><span class="material-symbols-outlined">arrow_back</span></button>
                        ) : (<button className='desactiver'><span class="material-symbols-outlined">arrow_back</span></button>)}

                        {mouvementChoix.includes('bas') ? (
                            <button className='activer' onClick={() => {marcher('bas')}}><span class="material-symbols-outlined">arrow_downward</span></button>
                        ) : (<button className='desactiver'><span class="material-symbols-outlined">arrow_downward</span></button>)}

                        {mouvementChoix.includes('droite') ? (
                            <button className='activer' onClick={() => {marcher('droite')}}><span class="material-symbols-outlined">arrow_right_alt</span></button>
                        ) : (<button className='desactiver'><span class="material-symbols-outlined">arrow_right_alt</span></button>)}
                    </div>
            </div>
            <div className="indication">
                <p>X : {storeDeplacement.zoneX}</p>
                <p>Y : {storeDeplacement.zoneY}</p>
                <p>Z : {storeDeplacement.zoneZ}</p>
            </div>
            <div className="mini-map">
                <MiniMap refreshLocal={refreshLocal}/>
            </div>
        </div>
    )
}

export default Deplacement