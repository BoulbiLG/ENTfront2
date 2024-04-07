import React, { useState } from 'react';

import FenetreStockage from '../../interface/stockage/FenetreStockage';

import parametreStore from '../../variableGlobal/global/parametreStore';

import ouvertureFenetre from '../../audio/audio/ouvertureFenetre.mp3';

import './stockage.css';

const Stockage = ({ height, width, img, type, x, y, id, inventaireStockage, stockageStore }) => {

    const [fenetreCoffre, fenetreCoffreSet] = useState('false');
    const style = {
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        cursor: 'pointer',
        height: `${width}vh`,
        width: `${height}vh`,
        scale: '20%',
    }

    const storeParametre = parametreStore();

    return (
        <div className='Stockage'>
            { fenetreCoffre === 'true' ? (
                <>
                    <img style={style} src={img} alt={img} onClick={() => {
                        fenetreCoffreSet('false')
                        const audio = new Audio(ouvertureFenetre);audio.volume = storeParametre.volumeBruitage / 100;audio.play();
                        }}/>
                    <FenetreStockage type={type} idStockage={id} inventaireStockage={inventaireStockage} stockageStore={stockageStore} />
                </>
            ) : <img style={style} src={img} alt={img} onClick={() => {
                fenetreCoffreSet('true');
                const audio = new Audio(ouvertureFenetre);audio.volume = storeParametre.volumeBruitage / 100;audio.play();
                }}/> }
        </div>
    )
}

export default Stockage;
