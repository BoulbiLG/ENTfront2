import React from 'react';

import parametreStore from '../../variableGlobal/global/parametreStore';

import './fenetreHistorique.css';
import '../../css/classe/btn.css';

const FenetreHistorique = () => {

    const storeParametre = parametreStore();

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
                        onChange={(e) => {storeParametre.modifier('FenetreHistoriqueCombatWidth', e.target.value)}}
                    />
                </div>
                <div className="range">
                    <p>Largeur de la fenetre</p>
                    <input
                        type="range"
                        min={20}
                        max={70}
                        value={storeParametre.FenetreHistoriqueCombatHeight}
                        onChange={(e) => {storeParametre.modifier('FenetreHistoriqueCombatHeight', e.target.value)}}
                    />
                </div>
                <div className="range">
                    <p>Position de la fenetre sur l'axe des absisses</p>
                    <input
                        type="range"
                        min={0}
                        max={165}
                        value={storeParametre.FenetreHistoriqueCombatX}
                        onChange={(e) => {storeParametre.modifier('FenetreHistoriqueCombatX', e.target.value)}}
                    />
                </div>
                <div className="range">
                    <p>Position de la fenetre sur l'axe des ordonnés</p>
                    <input
                        type="range"
                        min={0}
                        max={40}
                        value={storeParametre.FenetreHistoriqueCombatY}
                        onChange={(e) => {storeParametre.modifier('FenetreHistoriqueCombatY', e.target.value)}}
                    />
                </div>
                {
                <div className="range">
                    <p>Opacité de la fenetre</p>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={storeParametre.FenetreHistoriqueCombatOpacite}
                        onChange={(e) => {storeParametre.modifier('FenetreHistoriqueCombatOpacite', e.target.value)}}
                    />
                </div>
                }
                <div className="range">
                    <p>Taille de la fenetre</p>
                    <input
                        type="range"
                        min={10}
                        max={200}
                        value={storeParametre.FenetreHistoriqueCombatTaille}
                        onChange={(e) => {storeParametre.modifier('FenetreHistoriqueCombatTaille', e.target.value)}}
                    />
                </div>
                <div className="range" >
                    <p>Apparition au début du combat</p>
                    <div className="bouton">
                        {storeParametre.FenetreHistoriqueCombatApparition === 'true' ? (
                            <button style={{backgroundColor: 'white', color: 'black'}} onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatApparition', 'true');}}>Oui</button>
                        ) :
                            <button className='' onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatApparition', 'true');}}>Oui</button>
                        }
                        {storeParametre.FenetreHistoriqueCombatApparition === 'false' ? (
                            <button style={{backgroundColor: 'white', color: 'black'}} onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatApparition', 'false');}}>Non</button>
                        ) :
                            <button className='' onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatApparition', 'false');}}>Non</button>
                        }
                    </div>
                </div>
                <div className="range">
                    <p>Type d'écriture</p>
                    <div className="bouton">
                    {storeParametre.FenetreHistoriqueCombatType === 'propre' ? (
                            <button style={{backgroundColor: 'white', color: 'black'}} onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatType', 'propre');}}>Propre</button>
                        ) :
                            <button className='' onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatType', 'propre');}}>Propre</button>
                        }
                        {storeParametre.FenetreHistoriqueCombatType === 'resume' ? (
                            <button style={{backgroundColor: 'white', color: 'black'}} onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatType', 'resume');}}>Résumé</button>
                        ) :
                            <button className='' onClick={() => {storeParametre.modifier('FenetreHistoriqueCombatType', 'resume');}}>Résumé</button>
                        }
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
                <br />
            </div>
        </div>
    )
}

export default FenetreHistorique