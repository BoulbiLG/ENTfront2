import React, { useState } from 'react';

import FenetreStockage from '../../interface/stockage/FenetreStockage';

import './stockage.css';

const Stockage = ({ height, width, img, type, x, y, id, inventaireStockage, stockageStore }) => {
    const [fenetreCoffre, fenetreCoffreSet] = useState('false');

    console.log(height);
    console.log(width);
    console.log(x);
    console.log(y);

    const style = {
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        cursor: 'pointer',
        height: `${width}vh`,
        width: `${height}vh`,
        scale: '20%',
    }

    return (
        <div className='Stockage'>
            { fenetreCoffre === 'true' ? (
                <>
                    <img style={style} src={img} alt={img} onClick={() => {fenetreCoffreSet('false')}}/>
                    <FenetreStockage type={type} idStockage={id} inventaireStockage={inventaireStockage} stockageStore={stockageStore} />
                </>
            ) : <img style={style} src={img} alt={img} onClick={() => {fenetreCoffreSet('true')}}/> }
        </div>
    )
}

export default Stockage;
