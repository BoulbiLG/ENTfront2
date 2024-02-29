import React, { useEffect, useState } from 'react';
import './miniMap.css';
import '../../css/classe/fenetre1.css';
import onche from '../../asset/minimap/onche/onche.png';
import miniMapStore from '../../variableGlobal/global/miniMap';

const MiniMap = ({ refreshLocal }) => {
    const storeMiniMap = miniMapStore();
    const [img, imgSet] = useState(onche);
    const [key, setKey] = useState(0);

    useEffect(() => {
        console.log(storeMiniMap.z);

        if (storeMiniMap.z === 0) {
            imgSet(onche);
        } else if (storeMiniMap.z === 1) {
            imgSet('');
            setKey((prevKey) => prevKey + 1);
        }
    }, [storeMiniMap.z, refreshLocal]);

    return (
        <div key={key} className="MiniMap fenetre1Classe" style={{ overflow: 'hidden' }}>
            <div
                className="MiniMap fenetre1Classe"
                style={{
                    background: `url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '150%',
                    backgroundPosition: `${storeMiniMap.x}px ${storeMiniMap.y}px`,
                }}
            ></div>
            <div className="joueur"></div>
        </div>
    );
};

export default MiniMap;
