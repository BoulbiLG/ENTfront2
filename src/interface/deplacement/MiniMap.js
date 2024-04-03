import React, { useEffect, useState } from 'react';
import './miniMap.css';
import '../../css/classe/fenetre1.css';
import onche from '../../asset/minimap/onche/onche.png';
import miniMapStore from '../../variableGlobal/global/miniMap';
import deplacementStore from '../../variableGlobal/global/deplacementStore';

import { miniMapDonnee } from './miniMapDonne';

const MiniMap = ({ refreshLocal }) => {

    const { lieux } = deplacementStore();
    const { miniMapX } = deplacementStore();
    const { miniMapY } = deplacementStore();
    const storeDeplacement = deplacementStore();

    const storeMiniMap = miniMapStore();
    const [img, imgSet] = useState(onche);
    const [key, setKey] = useState(0);
    const [miniMapCourante, miniMapCouranteSet] = useState(miniMapDonnee[0].onche);
    const miniMapInverse = [...miniMapCourante].reverse();


    useEffect(() => {
        miniMapCouranteSet(miniMapDonnee[0].onche)
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
            {miniMapInverse.map(({x, y, z}) => (
                    <>
                        {x === storeDeplacement.zoneX && y === storeDeplacement.zoneY ? (
                            <div className="case" style={{
                                position: 'absolute',
                                backgroundColor: 'red',
                                top: `${-((y * 20) + miniMapY) - ancrage}px`,
                                left: `${((x * 20) + miniMapX) - ancrage}px`,
                            }}>
                            </div>
                        ) :
                            <div className="case" style={{
                                position: 'absolute',
                                top: `${-((y * 20) + miniMapY) - ancrage}px`,
                                left: `${((x * 20) + miniMapX) - ancrage}px`,
                            }}>
                            </div>
                        }
                    </>
                ))}
            </div>

            {/*<div className="joueur"></div>*/}
        </div>
    );
};

export default MiniMap;
