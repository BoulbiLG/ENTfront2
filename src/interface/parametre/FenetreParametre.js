import React, { useState } from 'react';

import './fenetreParametre.css';
import '../../css/classe/fenetreDrag.css';

import parametreStore from '../../variableGlobal/global/parametreStore';

import FenetreHistorique from './FenetreHistorique';

const FenetreParametre = ({affichageFenetreSet}) => {



    // ==================== DECLARATION VARIABLE ==================== //


    
    const storeParametre = parametreStore();

    const [bruitageVolume, bruitageVolumeSet] = useState(storeParametre.volumeBruitage);
    const [volumeMusique, volumeMusiqueSet] = useState(storeParametre.volumeMusique);
    


    // ==================== FENETRE BOUGEABLE ==================== //
    


    return (
        <div className="ombre">
            <div 
                className='FenetreParametre'
                style={{
                    position: 'absolute',
                    left: `20%`,
                    top: `20%`,
                    width: '130vh',
                    height: '70vh',
                    maxHeight: '70vh'
                }}
            >
                <button className='fermer' onClick={() => {affichageFenetreSet('false');}}><span class="material-symbols-outlined">close</span></button>
                <br />
                <h1 style={{
                    textAlign: 'center',
                }}>Paramètres</h1>
                <div className="defilement" style={{
                    overflowY: 'scroll',
                    position: 'relative',
                    maxHeight: '60vh',
                }}>
                    <br />
                    <p>Audio</p>
                    <hr />
                    <br />
                    <div className="listeParametre">
                        <div className="bruitage parametre range">
                            <p>Bruitage</p>
                            {/*
                            <p>Volume : {bruitageVolume}</p>
                            {bruitage === 'oui' ? (
                                <input type="checkbox" defaultChecked onClick={() => {changerBruitage();}}/>
                            ) : <input type="checkbox" onClick={() => {changerBruitage();}}/> }
                            */}
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={bruitageVolume}
                                onChange={(e) => {bruitageVolumeSet(e.target.value); storeParametre.modifier('volumeBruitage', e.target.value)}}
                            />
                        </div>
                        <div className="bruitage parametre range">
                            <p>Musique</p>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={volumeMusique}
                                onChange={(e) => {volumeMusiqueSet(e.target.value); storeParametre.modifier('volumeMusique', e.target.value)}}
                            />
                        </div>
                    </div>
                    <FenetreHistorique />
                </div>
            </div>
        </div>
    )
}

export default FenetreParametre