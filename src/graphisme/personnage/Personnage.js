import React, { useState } from 'react';

import FenetreDialogue from '../../interface/dialogue/FenetreDialogue';

const Personnage = ({ x, y, storePersonnage, parlerAutorisation = 'false' }) => {
    
    const [etat, etatSet] = useState('fixe');

    let style;
    if(storePersonnage.sexe == 'f') {
        style = {
            cursor: 'pointer',
            scale: '120%',
        };
    } else {
        style = {cursor: 'pointer'};
    }
        
    return (
        <div className='personnageConteneur' 
            style={{
                position: 'absolute',
                top: y,
                left: x
            }}
        >
            {etat === 'fixe' ? (
                <img src={storePersonnage.imgNormal} alt="personnage" style={style} onClick={() => {etatSet('dialogue')}}/>
            ) : null }
            {etat === 'dialogue' ? (
                <img src={storePersonnage.imgNormal} alt="personnage" style={style} onClick={() => {etatSet('fixe')}}/>
            ) : null }
            {etat === 'dialogue' ? (
                <>
                    <FenetreDialogue storePersonnage={storePersonnage}/>
                </>
            ) : null }
        </div>
    )
}

export default Personnage