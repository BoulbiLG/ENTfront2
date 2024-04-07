
import React, { useEffect } from 'react';

import './cinematique.css';

import cinematiqueStore from '../../variableGlobal/global/cinematiqueStore';

const Cinematique = () => {

    const storeCinematique = cinematiqueStore();
    const { cinematique } = cinematiqueStore();

    useEffect(() => {
        console.log('cinematique verification');
    }, [cinematique]);
    return (
        <>
            {cinematique === 'oui' ? (
                <div className='Cinematique' >
                    <p>Fenetre pour Cinématique</p>
                    <button onClick={() => {
                        storeCinematique.modifier('cinematique', 'non');
                        storeCinematique.modifier('courant', '');
                    }}>Fermer</button>
                </div>
            ) : null }
        </>
    )
}

export default Cinematique