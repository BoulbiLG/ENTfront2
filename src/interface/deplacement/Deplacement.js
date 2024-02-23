import React, { useState, useEffect } from 'react';

import './deplacement.css';

import deplacementStore from '../../variableGlobal/global/deplacementStore';
import colisionStore from '../../variableGlobal/global/colisionStore';

const Deplacement = () => {



    // ==================== DECLARATION VARIABLE ==================== //

    const storeDeplacement = deplacementStore();
    const storeColision = colisionStore();

    const position = `X${storeDeplacement.zoneX}Y${storeDeplacement.zoneY}Z${storeDeplacement.zoneZ}`;
    
    const [mouvementChoix, setMouvementChoix] = useState([]);

    useEffect(() => {
        const colision = storeColision.find((colision) => colision.position === position);
        const nouveauxMouvements = colision ? colision.mouvement : [];
        setMouvementChoix(nouveauxMouvements);
    }, [storeColision, position]);

    return (
        <div className="limitation">
            <div className='Deplacement'>
                    <div className="haut">

                        {mouvementChoix.includes('monter') ? (
                            <button className='activer' onClick={() => {storeDeplacement.ajouter('zoneZ', 1)}}>Monter</button>
                        ) : (<button className='desactiver'>Monter</button>)}

                        {mouvementChoix.includes('haut') ? (
                            <button className='activer' onClick={() => {storeDeplacement.ajouter('zoneY', 1)}}><span class="material-symbols-outlined">arrow_upward</span></button>
                        ) : (<button className='desactiver'><span class="material-symbols-outlined">arrow_upward</span></button>)}

                        {mouvementChoix.includes('descendre') ? (
                            <button className='activer' onClick={() => {storeDeplacement.retirer('zoneZ', 1)}}>Descendre</button>
                        ) : (<button className='desactiver'>Descendre</button>)}

                    </div>
                    <div className="bas">

                        {mouvementChoix.includes('gauche') ? (
                            <button className='activer' onClick={() => {storeDeplacement.retirer('zoneX', 1)}}><span class="material-symbols-outlined">arrow_back</span></button>
                        ) : (<button className='desactiver'><span class="material-symbols-outlined">arrow_back</span></button>)}

                        {mouvementChoix.includes('bas') ? (
                            <button className='activer' onClick={() => {storeDeplacement.retirer('zoneY', 1)}}><span class="material-symbols-outlined">arrow_downward</span></button>
                        ) : (<button className='desactiver'><span class="material-symbols-outlined">arrow_downward</span></button>)}

                        {mouvementChoix.includes('droite') ? (
                            <button className='activer' onClick={() => {storeDeplacement.ajouter('zoneX', 1)}}><span class="material-symbols-outlined">arrow_right_alt</span></button>
                        ) : (<button className='desactiver'><span class="material-symbols-outlined">arrow_right_alt</span></button>)}
                    </div>
            </div>
            <div className="indication">
                <p>X : {storeDeplacement.zoneX}</p>
                <p>Y : {storeDeplacement.zoneY}</p>
                <p>Z : {storeDeplacement.zoneZ}</p>
            </div>
        </div>
    )
}

export default Deplacement