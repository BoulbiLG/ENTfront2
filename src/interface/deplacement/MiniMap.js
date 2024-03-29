import React, { useEffect, useState } from 'react';
import './miniMap.css';
import '../../css/classe/fenetre1.css';
import onche from '../../asset/minimap/onche/onche.png';
import miniMapStore from '../../variableGlobal/global/miniMap';
import deplacementStore from '../../variableGlobal/global/deplacementStore';

import { miniMapDonnee } from './miniMapDonne';

const MiniMap = ({ refreshLocal }) => {

    const { lieux } = deplacementStore();

    const storeMiniMap = miniMapStore();
    const [img, imgSet] = useState(onche);
    const [key, setKey] = useState(0);
    const [miniMapCourante, miniMapCouranteSet] = useState(miniMapDonnee[0].onche);

    useEffect(() => {
        miniMapCouranteSet(miniMapDonnee[0].onche)
    }, [lieux]);

    useEffect(() => {
        if (storeMiniMap.z === 0) {
            imgSet(onche);
        } else if (storeMiniMap.z === 1) {
            imgSet('');
            setKey((prevKey) => prevKey + 1);
        }
    }, [storeMiniMap.z, refreshLocal]);

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
                {miniMapCourante.map(({x, y}) => (
                    <div className="case" style={{
                        position: 'absolute',
                        top: `${y * 50}px`,
                        left: `${x * 50}px`,
                    }}></div>
                ))}
            </div>

            <div className="joueur"></div>
        </div>
    );
};

export default MiniMap;
