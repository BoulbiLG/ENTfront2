import React, { useState } from 'react';

import './magie.css';
import '../../css/classe/btn.css';

import { utiliserSort } from './fonction/joueur/magie/utiliserSort';

const Magie = ({ etapeSet, joueurCourant, storeEnnemis, storeCombat, historique, historiqueSet }) => {

    const dimension = 60;

    const [avertissement, avertissementSet] = useState('');
    const [sortCourant, sortCourantSet] = useState([]);
    const [cible, cibleSet] = useState('false');

    return (
        <div className='Magie' >
            {cible === 'false' ? (
                <div className="listeSort">
                    <p>Quel sort utiliser ?</p>
                    <br />
                    {joueurCourant.magieTout.lexique.map((element, index) => (
                        <>
                            {element.niveau <= joueurCourant.niveau ? (
                                <>
                                    {element.type === 'offensive' || element.type === 'baisseStat' ? (
                                        <div className={
                                            element.type === 'offensive' ? 'sort offensive' : 
                                            element.type === 'soin' ? 'sort soin' :
                                            element.type === 'soinTour' ? 'sort soin' :
                                            element.type === 'augmenteStat' ? 'sort augmenteStat' :
                                            element.type === 'baisseStat' ? 'sort baisseStat' :
                                            'sort'
                                        }
                                        onClick={() => {cibleSet('true');}}
                                        >
                                            <div className="gauche"><p>{element.nom}</p></div>
                                            <div className="centre"><p>Cout : {element.cout}</p></div>
                                            <div className="droite"><img src={element.imgIcone} alt={element.imgIcone} style={{height: `${dimension}px`, width: `${dimension}px`}} /></div>
                                        </div>
                                    ) : null }
                                    {element.type === 'soin' || element.type === 'augmenteStat' ? (
                                        <div className={
                                            element.type === 'offensive' ? 'sort offensive' : 
                                            element.type === 'soin' ? 'sort soin' :
                                            element.type === 'soinTour' ? 'sort soin' :
                                            element.type === 'augmenteStat' ? 'sort augmenteStat' :
                                            element.type === 'baisseStat' ? 'sort baisseStat' :
                                            'sort'
                                        }
                                        onClick={() => {utiliserSort(
                                            joueurCourant,
                                            storeEnnemis, 
                                            storeCombat, 
                                            element, 
                                            historique, 
                                            historiqueSet, 
                                            avertissementSet
                                        )}}
                                        >
                                            <div className="gauche"><p>{element.nom}</p></div>
                                            <div className="centre"><p>Cout : {element.cout}</p></div>
                                            <div className="droite"><img src={element.imgIcone} alt={element.imgIcone} style={{height: `${dimension}px`, width: `${dimension}px`}} /></div>
                                        </div>
                                    ) : null }
                                </>
                            ) : null }
                        </>
                    ))}
                    <button className='btnClasse' style={{width: '100%', margin: 0, backgroundColor: 'black', color: 'white', padding: '0.6vh'}} onClick={() => {etapeSet('quoi');}}>Retour</button>
                </div>
            ) : null }
            {cible === 'true' ? (
                <div className="listeEnnemis">
                    <p>Qui voulez vous cibler ?</p>
                    <br />
                    {storeEnnemis.map((element, index) => (
                        <div className='btnClasse' style={{
                            width: '100%',
                            margin: 0,
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '0.6vh',
                            marginBottom: '0.5vh',
                            textAlign: 'center',
                            fontSize: '0.9rem'
                        }} 
                        onClick={() => {utiliserSort(
                            joueurCourant,
                            storeEnnemis, 
                            storeCombat, 
                            element, 
                            historique, 
                            historiqueSet, 
                            avertissementSet
                        )}}
                        >
                            <p>{element.nom}</p>
                        </div>
                    ))}
                    <button className='btnClasse' style={{width: '100%', margin: 0, backgroundColor: 'black', color: 'white', padding: '0.6vh'}} onClick={() => {cibleSet('false');}}>Retour</button>
                </div>
            ) : null }
            <br />
            <div className="avertissement">
                <p>{avertissement}</p>
            </div>
        </div>
    )
}

export default Magie