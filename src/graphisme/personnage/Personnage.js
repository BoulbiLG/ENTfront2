import React, { useEffect, useState } from 'react';

import FenetreDialogue from '../../interface/dialogue/FenetreDialogue';

import combatStore from '../../variableGlobal/global/combatStore';

import '../../css/classe/clickable.css';
import './personnage.css';

const Personnage = ({ x, y, storePersonnage, parlerAutorisation = 'false' }) => {

    const storeCombat = combatStore();
    
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
        <div className='personnageConteneur Personnage clickable' 
            style={{
                position: 'absolute',
                top: y,
                left: x
            }}
        >
            {storePersonnage.vie > 0 ? (
                <>
                    {etat === 'fixe' ? (
                        <img src={storePersonnage.imgNormal} alt="personnage" style={style} onClick={() => {etatSet('dialogue')}}/>
                    ) : null }
                    {etat === 'dialogue' ? (
                        <img src={storePersonnage.imgNormal} alt="personnage" style={style} onClick={() => {etatSet('fixe')}}/>
                    ) : null }
                    {etat === 'dialogue' ? (
                        <>
                            <FenetreDialogue storePersonnage={storePersonnage} etatSet={etatSet}/>
                        </>
                    ) : null }
                </>
            ) : null }
        </div>
    )
}

export default Personnage