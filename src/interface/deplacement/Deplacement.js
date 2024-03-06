import React, { useState, useEffect } from 'react';

import './deplacement.css';

import deplacementStore from '../../variableGlobal/global/deplacementStore';
import colisionStore from '../../variableGlobal/global/colisionStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';
import miniMapStore from '../../variableGlobal/global/miniMap';
import parametreStore from '../../variableGlobal/global/parametreStore';
import musiqueStore from '../../variableGlobal/audio/musiqueStore';

import { verificationMusique } from './verificationMusique';
import { verificationCase } from './verificationCase';

import MiniMap from './MiniMap';
import Lieux from './Lieux';

const Deplacement = () => {



    // ==================== DECLARATION VARIABLE ==================== //



    const storeDeplacement = deplacementStore();
    const storeColision = colisionStore();
    const storeCelestin = CelestinStore();
    const storeMiniMap = miniMapStore();
    const storeMusique = musiqueStore();
    const { volumeMusique } = parametreStore();

    const position = `X${storeDeplacement.zoneX}Y${storeDeplacement.zoneY}Z${storeDeplacement.zoneZ}`;
    
    const [mouvementChoix, setMouvementChoix] = useState([]);
    const [refreshLocal, refreshLocalSet] = useState(0);
    const [lieux, lieuxSet] = useState("Village d'Onche");

    useEffect(() => {
        if (storeDeplacement.tutoVillage == 'non') {
            const colision = storeColision.tutoVillageNon.find((colision) => colision.position === position);
            const nouveauxMouvements = colision ? colision.mouvement : [];
            setMouvementChoix(nouveauxMouvements);
        } else if (storeDeplacement.tutoVillage == 'oui') {
            const colision = storeColision.tutoVillageOui.find((colision) => colision.position === position);
            const nouveauxMouvements = colision ? colision.mouvement : [];
            setMouvementChoix(nouveauxMouvements);
        }
    }, [storeColision, position, volumeMusique]);



    // ==================== DECLARATION VARIABLE ==================== //



    const marcher = async (direction) => {
        setMouvementChoix([]);
        storeCelestin.modifier('comportement', 'marcher');

        const miniMapX = 16.5;
        const miniMapY = 9.5;
      
        await new Promise((resolve) => {
          setTimeout(() => {
            if (direction === 'monter') {
                const autorisation = verificationCase('monter', storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ, storeDeplacement, lieuxSet, storeMusique);
                if (autorisation == true) {
                    storeDeplacement.ajouter('zoneZ', 1); 
                    storeMiniMap.ajouter('z', 1); 
                }
            }
            if (direction === 'haut') {
                const autorisation = verificationCase('haut', storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ, storeDeplacement, lieuxSet, storeMusique);
                if (autorisation == true) {
                    storeDeplacement.ajouter('zoneY', 1); 
                    storeMiniMap.ajouter('y', miniMapY);
                }
            }
            if (direction === 'descendre') {
                const autorisation = verificationCase('descendre', storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ, storeDeplacement, lieuxSet, storeMusique);
                if (autorisation == true) {
                    storeDeplacement.retirer('zoneZ', 1); 
                    storeMiniMap.retirer('z', 1);
                }
            }
            if (direction === 'gauche') {
                const autorisation = verificationCase('gauche', storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ, storeDeplacement, lieuxSet, storeMusique);
                if (autorisation == true) {
                    storeDeplacement.retirer('zoneX', 1); 
                    storeMiniMap.ajouter('x', miniMapX);
                }
            }
            if (direction === 'bas') {
                const autorisation = verificationCase('bas', storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ, storeDeplacement, lieuxSet, storeMusique);
                if (autorisation == true) {
                    storeDeplacement.retirer('zoneY', 1); 
                    storeMiniMap.retirer('y', miniMapY);
                }
            }
            if (direction === 'droite') {
                const autorisation = verificationCase('droite', storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ, storeDeplacement, lieuxSet, storeMusique);
                if (autorisation == true) {
                    storeDeplacement.ajouter('zoneX', 1); 
                    storeMiniMap.retirer('x', miniMapX);
                }
            }
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
            <div className="sectionLieux">
                <Lieux lieux={lieux}/>
            </div>
        </div>
    )
}

export default Deplacement