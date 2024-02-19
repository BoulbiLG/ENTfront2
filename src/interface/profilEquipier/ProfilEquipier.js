import React from 'react';

import './profilEquipier.css';

import equipeStore from '../../variableGlobal/personnage/equipeStore';

const ProfilEquipier = ({ nom, courant }) => {

    const storeEquipe = equipeStore();

    const modifierEquipementCourant = (nom) => {

        storeEquipe.modifierCourant(nom)
        
    }

    return (
        <div>
            { courant === nom ? (
                <div className='ProfilEquipier courant' onClick={() => {modifierEquipementCourant(nom)}}>
                    <span class="material-symbols-outlined">person</span>
                    <p>{nom}</p>
                </div>
            ) : 
                <div className='ProfilEquipier basic' onClick={() => {modifierEquipementCourant(nom)}}>
                    <span class="material-symbols-outlined">person</span>
                    <p>{nom}</p>
                </div>
            }
        </div>
    )
}

export default ProfilEquipier