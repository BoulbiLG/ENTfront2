import React, { useEffect, useState } from 'react';
import './miniMap.css';
import '../../css/classe/fenetre1.css';
import onche from '../../asset/minimap/onche/onche.png';
import miniMapStore from '../../variableGlobal/global/miniMap';
import deplacementStore from '../../variableGlobal/global/deplacementStore';
import combatStore from '../../variableGlobal/global/combatStore.js';
import equipeStore from '../../variableGlobal/personnage/equipeStore.js';
import ennemiStore from '../../variableGlobal/ennemi/ennemiStore.js';
import musiqueStore from '../../variableGlobal/audio/musiqueStore.js';

import { miniMapDonnee } from './miniMapDonne';

import { verificationCombat } from './verificationCombat.js';

const MiniMap = ({ refreshLocal }) => {

    const { lieux } = deplacementStore();
    const { miniMapX } = deplacementStore();
    const { miniMapY } = deplacementStore();
    const storeDeplacement = deplacementStore();
    const storeMusique = musiqueStore();
    const storeEnnemi = ennemiStore();
    const storeCombat = combatStore();
    const storeEquipe = equipeStore();

    const storeMiniMap = miniMapStore();
    const [img, imgSet] = useState(onche);
    const [key, setKey] = useState(0);
    const [miniMapCourante, miniMapCouranteSet] = useState(miniMapDonnee[0].onche);
    const miniMapInverse = [...miniMapCourante].reverse();


    useEffect(() => {
        if (storeDeplacement.lieux === 'onche') {
            miniMapCouranteSet(miniMapDonnee[0].onche);
        }
        if (storeDeplacement.lieux === 'foretENT') {
            miniMapCouranteSet(miniMapDonnee[0].foretENT);
        }
        verificationCombat(miniMapCourante, storeDeplacement, storeCombat, storeEquipe, storeEnnemi, storeMusique);
    }, [lieux, miniMapX, miniMapY]);

    useEffect(() => {
        if (storeMiniMap.z === 0) {
            imgSet(onche);
        } else if (storeMiniMap.z === 1) {
            imgSet('');
            setKey((prevKey) => prevKey + 1);
        }
    }, [storeMiniMap.z, refreshLocal]);

    const ancrage = -70;

    return (
        <div key={key} className="MiniMap fenetre1Classe" style={{ overflow: 'hidden' }}>
            {/*
            <div
                className="MiniMap fenetre1Classe"
                style={{
                    background: `url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '150%',
                    backgroundPosition: `${storeMiniMap.x}px ${storeMiniMap.y}px`,
                }}
            ></div>
            */}

            <div className="caseListe">
            {miniMapInverse.map(({x, y, type}) => (
                    <>
                        {x === storeDeplacement.zoneX && y === storeDeplacement.zoneY ? (
                            <div className="case" style={{
                                position: 'absolute',
                                backgroundColor: 'green',
                                top: `${-((y * 20) + miniMapY) - ancrage}px`,
                                left: `${((x * 20) + miniMapX) - ancrage}px`,
                            }}>
                            </div>
                        ) :
                            <>
                                {type === 'combat' ? (
                                    <div className="case" style={{
                                        position: 'absolute',
                                        backgroundColor: 'red',
                                        top: `${-((y * 20) + miniMapY) - ancrage}px`,
                                        left: `${((x * 20) + miniMapX) - ancrage}px`,
                                    }}>
                                    </div>
                                ) : null }
                                {type === 'entre' ? (
                                    <div className="case" style={{
                                        position: 'absolute',
                                        backgroundColor: 'blue',
                                        top: `${-((y * 20) + miniMapY) - ancrage}px`,
                                        left: `${((x * 20) + miniMapX) - ancrage}px`,
                                    }}>
                                    </div>
                                ) : null }
                                {type === '' ? (
                                    <div className="case" style={{
                                        position: 'absolute',
                                        backgroundColor: 'white',
                                        top: `${-((y * 20) + miniMapY) - ancrage}px`,
                                        left: `${((x * 20) + miniMapX) - ancrage}px`,
                                    }}>
                                    </div>
                                ) : null }
                            </>
                        }
                    </>
                ))}
            </div>

            {/*<div className="joueur"></div>*/}
        </div>
    );
};

export default MiniMap;
