import React, { useState } from 'react';

import parametreStore from '../../variableGlobal/global/parametreStore';

import './fenetreHistorique.css';
import '../../css/classe/btn.css';

const FenetreHistorique = () => {

    const storeParametre = parametreStore();

    const [opacite, opaciteSet] = useState(storeParametre.FenetreHistoriqueCombatOpacite);
    const [height, heightSet] = useState(storeParametre.FenetreHistoriqueCombatHeight);
    const [width, widthSet] = useState(storeParametre.FenetreHistoriqueCombatWidth);
    const [x, xSet] = useState(storeParametre.FenetreHistoriqueCombatX);
    const [y, ySet] = useState(storeParametre.FenetreHistoriqueCombatY);
    const [taille, tailleSet] = useState(storeParametre.FenetreHistoriqueCombatTaille);

    return (
        <div className='FenetreHistorique'>
            <br />
            <p>Fenetre de l'historique des actions en combat</p>
            <hr />
            <br />
            <div style={{
                position: 'relative',
                display: 'block',
                width: 'auto',

            }}>
                <div className="range">
                    <p>Longueur de la fenetre</p>
                    <input
                        type="range"
                        min={40}
                        max={140}
                        value={storeParametre.FenetreHistoriqueCombatWidth}
                        onChange={(e) => {widthSet(e.target.value); storeParametre.modifier('FenetreHistoriqueCombatWidth', e.target.value)}}
                    />
                </div>
                <div className="range">
                    <p>Largeur de la fenetre</p>
                    <input
                        type="range"
                        min={20}
                        max={70}
                        value={storeParametre.FenetreHistoriqueCombatHeight}
                        onChange={(e) => {widthSet(e.target.value); storeParametre.modifier('FenetreHistoriqueCombatHeight', e.target.value)}}
                    />
                </div>
                <div className="range">
                    <p>Position de la fenetre sur l'axe des absisses</p>
                    <input
                        type="range"
                        min={0}
                        max={165}
                        value={storeParametre.FenetreHistoriqueCombatX}
                        onChange={(e) => {widthSet(e.target.value); storeParametre.modifier('FenetreHistoriqueCombatX', e.target.value)}}
                    />
                </div>
                <div className="range">
                    <p>Position de la fenetre sur l'axe des ordonnés</p>
                    <input
                        type="range"
                        min={0}
                        max={59}
                        value={storeParametre.FenetreHistoriqueCombatY}
                        onChange={(e) => {widthSet(e.target.value); storeParametre.modifier('FenetreHistoriqueCombatY', e.target.value)}}
                    />
                </div>
                {/*
                <div className="range">
                    <p>Opacité</p>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={storeParametre.FenetreHistoriqueCombatOpacite}
                        onChange={(e) => {widthSet(e.target.value); storeParametre.modifier('FenetreHistoriqueCombatOpacite', e.target.value)}}
                    />
                </div>
                */}
                <div className="range">
                    <p>Taille de la fenetre</p>
                    <input
                        type="range"
                        min={10}
                        max={200}
                        value={storeParametre.FenetreHistoriqueCombatTaille}
                        onChange={(e) => {widthSet(e.target.value); storeParametre.modifier('FenetreHistoriqueCombatTaille', e.target.value)}}
                    />
                </div>
                <div className="range">
                    <p>Apparition au début du combat</p>
                    <p>{storeParametre.FenetreHistoriqueCombatApparition}</p>
                    <div className="bouton">
                        <button onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatApparition', 'true');}}>Oui</button>
                        <button onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatApparition', 'false');}}>Non</button>
                    </div>
                </div>
                <div className="range">
                    <p>Type d'écriture</p>
                    <p>{storeParametre.FenetreHistoriqueCombatType}</p>
                    <div className="bouton">
                        <button onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatType', 'propre');}}>Propre</button>
                        <button onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatType', 'resume');}}>Résumé</button>
                    </div>
                </div>
                <button className='btnClasse reinitialiser' onClick={() => {
                    storeParametre.modifier('FenetreHistoriqueCombatTaille', 100);
                    storeParametre.modifier('FenetreHistoriqueCombatOpacite', 100);
                    storeParametre.modifier('FenetreHistoriqueCombatX', 0);
                    storeParametre.modifier('FenetreHistoriqueCombatY', 0);
                    storeParametre.modifier('FenetreHistoriqueCombatHeight', 20);
                    storeParametre.modifier('FenetreHistoriqueCombatWidth', 40);
                    storeParametre.modifier('FenetreHistoriqueCombatApparition', 'true');
                    storeParametre.modifier('FenetreHistoriqueCombatType', 'propre');
                }}>Réinitialiser</button>
            </div>
        </div>
    )
}

export default FenetreHistorique