import React, { useState } from 'react';

import './magie.css';
import '../../css/classe/btn.css';

import { utiliserSort } from './fonction/joueur/magie/utiliserSort';
import { attaquerEnnemi } from './fonction/ennemi/attaquerEnnemi';

import { lexiqueArme } from '../../variableGlobal/item/lexiqueArme';
import equipeStore from '../../variableGlobal/personnage/equipeStore';
import inventaireStore from '../../variableGlobal/inventaire/inventaireStore';
import { verificationMort } from './fonction/verificationMort';

import deplacementStore from '../../variableGlobal/global/deplacementStore';
import combatStore from '../../variableGlobal/global/combatStore';
import musiqueStore from '../../variableGlobal/audio/musiqueStore';
import parametreStore from '../../variableGlobal/global/parametreStore';
import cinematiqueStore from '../../variableGlobal/global/cinematiqueStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';

const Magie = ({ etapeSet, joueurCourant, storeEnnemis, storeCombat, historique, historiqueSet, ennemiEnVie, joueurUtilisableSet, joueurUtilisable, storeJoueurs, strategieEnnemi, strategieEnnemiSet, joueurRestant }) => {

    const dimension = 60;

    console.log(joueurRestant);
    console.log(storeJoueurs)

    ennemiEnVie = storeCombat.ennemiEnVie;
    //console.log('ennemiEnVie magie : ', ennemiEnVie);

    const storeMusique = musiqueStore();
    const storeCelestin = CelestinStore();
    const storeDeplacement = deplacementStore();
    const storeCinematique = cinematiqueStore();
    const storeInventaire = inventaireStore();
    const { combat } = combatStore();
    const { type } = combatStore();
    const storeEquipe = equipeStore();

    const [avertissement, avertissementSet] = useState('');
    const [sortCourant, sortCourantSet] = useState([]);
    const [cible, cibleSet] = useState('false');



    // UTILISER UN SORT
    const utiliserSortBrut = (joueurCourant, storeCombat, storeEnnemis, sortCourant, historique, historiqueSet, avertissementSet, ennemi, ennemiEnVie, storeJoueurs) => {

        if (ennemi === undefined) {ennemi = ''}

        ennemiEnVie = utiliserSort(
            joueurCourant,
            storeCombat, 
            storeEnnemis, 
            sortCourant,
            historique,
            historiqueSet, 
            avertissementSet,
            ennemi,
            ennemiEnVie,
            storeJoueurs,
        );
        etapeSet('qui');

        joueurUtilisableSet((ancienJoueurUtilisable) => {
            const nouvelJoueurUtilisable = ancienJoueurUtilisable.filter(joueur => joueur !== joueurCourant.nom);
            return nouvelJoueurUtilisable;
        });
        console.log(joueurRestant);

        lancerTourEnnemi(storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, '', strategieEnnemi, strategieEnnemiSet);

    }



    // VERIFIER TOUR ENNEMI
    const lancerTourEnnemi = (storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet) => {

        //console.log(joueurUtilisable.length);
        //console.log(joueurUtilisable);
        verificationMort(storeJoueurs, storeEnnemis, storeCombat, storeEquipe, storeInventaire, joueurRestant[0], ennemiEnVie, storeMusique, storeDeplacement, storeCinematique, storeCelestin);

        // VERIFIE SI LES ENNEMI PEUVENT ATTAQUER
        if (joueurUtilisable.length === 1) {
            setTimeout(() => {
                //console.log('tour ennemi');
                joueurUtilisableSet(storeEquipe.nom);
                joueurRestant = attaquerEnnemi(storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet, joueurUtilisableSet, joueurUtilisable, storeEquipe.nom, ennemiEnVie, historique, historiqueSet);
            
                verificationMort(storeJoueurs, storeEnnemis, storeCombat, storeEquipe, storeInventaire, joueurRestant[0], ennemiEnVie, storeMusique, storeDeplacement, storeCinematique, storeCelestin);
            
            }, 1000);
        }
    }

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
                                        onClick={() => {
                                            cibleSet('true');
                                            sortCourantSet(element);
                                        }}
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
                                        onClick={() => {
                                            utiliserSortBrut(
                                                joueurCourant,
                                                storeCombat, 
                                                storeEnnemis, 
                                                element, 
                                                historique, 
                                                historiqueSet, 
                                                avertissementSet,
                                                '',
                                                ennemiEnVie,
                                                storeJoueurs,
                                            );
                                        }}
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
                    {storeEnnemis.map((ennemi, index) => (
                        <>
                            {ennemi.vie > 0 ? (
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
                                onClick={() => {
                                    utiliserSortBrut(
                                        joueurCourant,
                                        storeCombat, 
                                        storeEnnemis, 
                                        sortCourant,
                                        historique, 
                                        historiqueSet, 
                                        avertissementSet,
                                        ennemi,
                                        ennemiEnVie,
                                        storeJoueurs,
                                    );
                                }}
                                >
                                    <p>{ennemi.nom}</p>
                                </div>
                            ) : null }
                        </>
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