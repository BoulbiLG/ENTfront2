import React, { useEffect, useState } from 'react';

import normal from '../../asset/plan/combat/normal.png';
import hero from '../../asset/personnage/celestin/dos.png';

import { recupererListeStoreCombat } from './recupererListeStoreCombat';
import { recupererListeStore } from '../../fonction/recupererListeStore';
import { calculVitesse } from './fonction/calculVitesse';
import { attaquer } from './fonction/joueur/attaquer';
import { attaquerEnnemi } from './fonction/ennemi/attaquerEnnemi';
import { creationTabStratEnnemi } from './fonction/creationTabStratEnnemi';
import { verificationMort } from './fonction/verificationMort';

import '../../css/classe/btn.css';
import './fenetreCombat.css';
import './fenetreCombatAction.css';

import inventaireStore from '../../variableGlobal/inventaire/inventaireStore';
import deplacementStore from '../../variableGlobal/global/deplacementStore';
import combatStore from '../../variableGlobal/global/combatStore';
import musiqueStore from '../../variableGlobal/audio/musiqueStore';
import equipeStore from '../../variableGlobal/personnage/equipeStore';
import parametreStore from '../../variableGlobal/global/parametreStore';
import ennemiStore from '../../variableGlobal/ennemi/ennemiStore';
import cinematiqueStore from '../../variableGlobal/global/cinematiqueStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';
import { lexiqueArme } from '../../variableGlobal/item/lexiqueArme';

import Particule from '../../components/particule/Particule';
import Jauge from '../../components/jauge/Jauge';
import Item from '../../components/item/CaseItem';
import Historique from './Historique';
import Parametre from '../parametre/Parametre';
import Magie from './Magie';
import Objet from './Objet';
import GainItem from './GainItem';

const FenetreCombatEnnemi = () => {

    const storeCombat = combatStore();
    const storeEnnemis = ennemiStore();
    const storeMusique = musiqueStore();
    const storeCelestin = CelestinStore();
    const storeDeplacement = deplacementStore();
    const { combat } = combatStore();
    const { type } = combatStore();
    const storeEquipe = equipeStore();
    const storeCinematique = cinematiqueStore();

    let ennemiEnVie;

    const { FenetreHistoriqueCombatApparition } = parametreStore();
    const { FenetreHistoriqueCombatType } = parametreStore();

    const [etape, etapeSet] = useState('qui');
    const [fenetreDetail, fenetreDetailSet] = useState('false');
    const [ongletDetail, ongletDetailSet] = useState('stat');
    const [tour, tourSet] = useState('joueur');
    const [joueurCourant, joueurCourantSet] = useState([]);
    const [joueurUtilisable, joueurUtilisableSet] = useState(storeEquipe.nom);
    const [affichageGainItem, affichageGainItemSet] = useState('false');
    
    const [historique, historiqueSet] = useState([]);
    const [historiqueAffichage, historiqueAffichageSet] = useState(FenetreHistoriqueCombatApparition);
    const [historiqueType, historiqueTypeSet] = useState(FenetreHistoriqueCombatType);

    const [strategieEnnemi, strategieEnnemiSet] = useState([]);

    let fond = normal; if (combatStore.type === 'normal') {fond = normal;}

    var storeInventaire = inventaireStore();
    var storeJoueurs = recupererListeStore();
    
    let joueurRestant = [{
        joueurRestant: storeEquipe.nom,
        joueur: storeEquipe.nom,
        ennemi: storeCombat.nom,
    }];
    const lancerTourEnnemi = (storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemiSet) => {

        verificationMort(storeJoueurs, storeEnnemis, storeCombat, storeEquipe, storeInventaire, joueurRestant, ennemiEnVie, storeMusique, storeDeplacement, storeCinematique, storeCelestin);

        // VERIFIE SI LES ENNEMI PEUVENT ATTAQUER
        
        if (joueurUtilisable.length === 1) {
            tourSet('joueur');
            setTimeout(() => {
                
                joueurRestant = attaquerEnnemi(storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet, joueurUtilisableSet, joueurUtilisable, storeEquipe.nom, ennemiEnVie, historique, historiqueSet);
                
                joueurUtilisableSet(joueurRestant[0].joueurRestant);
                verificationMort(storeJoueurs, storeEnnemis, storeCombat, storeEquipe, storeInventaire, joueurRestant[0], ennemiEnVie, storeMusique, storeDeplacement, storeCinematique, storeCelestin);
                
            }, 1000);
        }
    }
    
    useEffect(() => {
        if (storeCombat.combat === 'oui') {

            joueurUtilisableSet(storeCombat.nom);

        }
    }, [storeEquipe.nom]);

    useEffect(() => {
        if (storeCombat.combat === 'oui'  && storeCombat.typeEnnemi === 'ennemi') {

            // CALCUL VITESSE

            // CREATION TABLEAU STRAT ENNEMI
            creationTabStratEnnemi(storeEnnemis, strategieEnnemiSet);

            // VERIFICATION MORT

        }
        
        if (storeCombat.etat === 'gainItem') {
            affichageGainItemSet('true');
        } else {
            affichageGainItemSet('false');
        }
    }, [combat, type, etape, storeCombat.ennemiEnVie, storeCombat.etat]);
    return (
        <>
            {storeCombat.typeEnnemi === 'ennemi' ? (
                <div className='conteneurCombat'>

                    {storeCombat.combat === 'oui' ? (
                        <div className='FenetreCombat' style={{background: `url(${fond})`}}>
            

                            <div className="parametreFenetre"><Parametre /></div>


                            {/* ========== LISTE ENNEMI ========== */}


                            <div className="listeEnnemi">
                            {storeEnnemis.ennemi.map((element, index) => (
                                <div className="ennemi" key={index}>
                                    <div className="info">
                                        <p>{element.nom}</p>
                                        <p>Lvl {element.niveau}</p>
                                    </div>
                                    <Jauge valeur={element.vie} max={element.vieMax} couleur='green' fond='grey' titre='PV' solo='non' dimension='non'/>
                                    <img src={element.imgNormal} alt={element.nom}/>
                                </div>
                            ))}

                            </div>


                            <div className="hero"><img src={hero} alt={hero} /></div>


                            {/* ========== FENETRE CHOIX ========== */}


                            <div className="choix" >
                                {etape === 'qui' ? (
                                    <>
                                        <p>Qui dois agir ?</p>
                                        <br />
                                        {storeJoueurs.map((joueur, index) => {
                                            if (joueurUtilisable.includes(joueur.nom) && storeJoueurs[index].vie > 0) {
                                                return (
                                                <button
                                                    key={index}
                                                    className='nomJoueur'
                                                    onClick={() => {
                                                    etapeSet('quoi');
                                                    joueurCourantSet(joueur);
                                                    }}
                                                >
                                                    {joueur.nom}
                                                </button>
                                                );
                                            } else {
                                                return null;
                                            }
                                        })}
                                        {joueurUtilisable.length > 0 ? (
                                            <button onClick={() => {
                                                storeMusique.modifier('courante', storeCombat.lieuPrecedent);
                                                storeMusique.modifier('lecture', 0);
                                                storeEnnemis.modifier('ennemi', []);
                                                storeCombat.modifier('combat', 'non');
                                                storeCombat.modifier('lieuPrecedent', '');
                                                storeCombat.modifier('etat', '');
                                                storeCombat.modifier('type', '');
                                                storeCombat.modifier('tour', '');
                                                storeCombat.modifier('nombreEnnemi', 0);
                                                storeCombat.modifier('nom', []);
                                                storeCombat.modifier('ennemiEnVie', []);
                                                storeCombat.modifier('soinTour', []);
                                                storeCombat.modifier('historique', []);
                                                storeCombat.modifier('effetTemporaire', []);
                                                storeCombat.modifier('historiqueAction', []);
                                            }} className='nomJoueur'>Fuire</button>
                                        ) : null }
                                    </>
                                ) : null }
                                {etape === 'quoi' ? (
                                    <div className='quoi'>
                                        <div className="main">
                                            <button onClick={() => {etapeSet('mainG');}} className='btnClasse mainG'>Main Gauche</button>
                                            <button onClick={() => {etapeSet('mainD');}} className='btnClasse mainD'>Main Droite</button>
                                        </div>
                                        <button onClick={() => {etapeSet('magie');}} className='btnClasse'>Magie</button>
                                        {/*<button onClick={() => {etapeSet('objet');}} className='btnClasse'>Utiliser un Objet</button>*/}
                                        {/*<button onClick={() => {
                                            joueurUtilisableSet((ancienJoueurUtilisable) => {
                                                const nouvelJoueurUtilisable = ancienJoueurUtilisable.filter(joueur => joueur !== joueurCourant.nom);
                                                return nouvelJoueurUtilisable;
                                            });
                                            ennemiEnVie = storeCombat.ennemiEnVie;
                                            etapeSet('qui');
                                            tourSet('ennemi');
                                            const ligne = {
                                                icone: joueurCourant.imgIcone,
                                                couleurFond: 'rgb(109, 255, 109)',
                                                couleurPolice: 'black',
                                                texte: `${joueurCourant.nom} ne fait rien`,
                                                resume: `${joueurCourant.nom} x`,
                                            }
                                            storeCombat.ajouterTableau('historiqueAction', ligne);
                                            lancerTourEnnemi(storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemiSet)
                                        }} className='btnClasse'>Ne rien faire</button>*/}
                                        <button style={{width: '100%', margin: 0, backgroundColor: 'black', color: 'white', padding: '0.6vh'}} onClick={() => {etapeSet('qui');}} className='btnClasse'>Retour</button>
                                    </div>
                                ) : null }
                                {etape === 'mainG' || etape === 'mainD' ? (
                                    <div className='cible'>
                                        <p>Qui voulez vous visez ?</p>
                                        <br />
                                        {storeEnnemis.ennemi.map((element, index) => {
                                            if (element.vie > 0) {
                                                return (
                                            <>
                                                <button className='cible' onClick={() => {
                                                    ennemiEnVie = attaquer(etape, storeEnnemis, joueurCourant, lexiqueArme, storeInventaire, storeCombat, joueurUtilisableSet, tourSet, storeCombat.ennemiEnVie, storeCombat.nom, historique, historiqueSet, element.id);
                                                    joueurUtilisableSet((ancienJoueurUtilisable) => {
                                                        const nouvelJoueurUtilisable = ancienJoueurUtilisable.filter(joueur => joueur !== joueurCourant.nom);
                                                        return nouvelJoueurUtilisable;
                                                    });
                                                    etapeSet('qui');
                                                    tourSet('ennemi');
                                                    lancerTourEnnemi(storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemiSet)
                                                }} >{element.nom} niv°{element.niveau}</button>
                                            </>
                                        );
                                    } else {
                                        return null;
                                    }
                                    })}
                                        <button className='cible retour' onClick={() => {etapeSet('quoi')}} >Retour</button>
                                    </div>
                                ) : null }
                                {etape === 'magie' ? (
                                    <Magie 
                                        etapeSet={etapeSet} 
                                        joueurCourant={joueurCourant} 
                                        storeEnnemis={storeEnnemis} 
                                        storeCombat={storeCombat} 
                                        historique={historique} 
                                        historiqueSet={historiqueSet} 
                                        ennemiEnVie={ennemiEnVie}
                                        joueurUtilisableSet={joueurUtilisableSet}
                                        joueurUtilisable={joueurUtilisable}
                                        storeJoueurs={storeJoueurs}
                                        strategieEnnemi={strategieEnnemi}
                                        strategieEnnemiSet={strategieEnnemiSet}
                                        joueurRestant={joueurRestant}
                                    />
                                ) : null }
                                {etape === 'objet' ? (
                                    <Objet 
                                        etapeSet={etapeSet} 
                                        joueurCourant={joueurCourant} 
                                        storeEnnemis={storeEnnemis} 
                                        storeCombat={storeCombat} 
                                        historique={historique} 
                                        historiqueSet={historiqueSet} 
                                        ennemiEnVie={ennemiEnVie}
                                        joueurUtilisableSet={joueurUtilisableSet}
                                        joueurUtilisable={joueurUtilisable}
                                        storeJoueurs={joueurCourant}
                                        strategieEnnemi={strategieEnnemi}
                                        strategieEnnemiSet={strategieEnnemiSet}
                                        joueurRestant={joueurRestant}
                                        storeJoueursTotal={storeJoueurs}
                                    />
                                ) : null }
                            </div>


                            {/* ========== FENETRE DETAIL ========== */}


                            <div className="listeJoueur" style={{display: 'flex'}}>
                                <div className="gauche" style={{flex: '1', display: 'flex', flexWrap: 'wrap'}}>
                                    {storeJoueurs.map((nom, index) => (
                                        <>
                                            <div className="carteJoueur">
                                                <div className="gauche" style={{backgroundColor: 'white', background: `url(${storeJoueurs[index].imgIcone})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                                <hr />
                                                <div className="info">
                                                    <div className="texte">
                                                        <p>{storeJoueurs[index].nom}</p>
                                                        <p>Lvl {storeJoueurs[index].niveau}</p>
                                                    </div>
                                                    <Jauge valeur={storeJoueurs[index].vie} max={storeJoueurs[index].vieMax} couleur='green' fond='grey' titre='PV' solo='non' dimension='non' style={{
                                                        margin: '0',
                                                    }} />
                                                    {fenetreDetail === 'false' ? (
                                                    <button onClick={() => {joueurCourantSet(storeJoueurs[index]); fenetreDetailSet('true');}} className='btnClasse' style={{
                                                        padding: '0.5vh',
                                                        width: '100%',
                                                        margin: '0',
                                                    }}>Détails</button>
                                                    ) :
                                                    <button onClick={() => {joueurCourantSet(storeJoueurs[index]); fenetreDetailSet('false');}} className='btnClasse' style={{
                                                        padding: '0.5vh',
                                                        width: '100%',
                                                        margin: '0',
                                                    }}>Détails</button>
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                                <hr />
                                <div className="droite" style={{flex: '1', display: 'flex', flexWrap: 'wrap'}}>
                                    {storeEnnemis.ennemi.map((element, index) => (
                                        <>
                                            <div className="carteJoueur">
                                                <div className="gauche" style={{backgroundColor: 'white', background: `url(${element.imgIcone})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                                <hr />
                                                <div className="info">
                                                    <div className="texte">
                                                        <p>{element.nom}</p>
                                                        <p>Lvl {element.niveau}</p>
                                                    </div>
                                                    <Jauge valeur={storeEnnemis.ennemi[index].vie} max={element.vieMax} couleur='green' fond='grey' titre='PV' solo='non' dimension='non' style={{
                                                        margin: '0',
                                                    }} />
                                                    {fenetreDetail === 'false' ? (
                                                    <button onClick={() => {joueurCourantSet(storeEnnemis.ennemi[index]); fenetreDetailSet('true');}} className='btnClasse' style={{
                                                        padding: '0.5vh',
                                                        width: '100%',
                                                        margin: '0',
                                                    }}>Détails</button>
                                                    ) :
                                                    <button onClick={() => {joueurCourantSet(storeEnnemis.ennemi[index]); fenetreDetailSet('false');}} className='btnClasse' style={{
                                                        padding: '0.5vh',
                                                        width: '100%',
                                                        margin: '0',
                                                    }}>Détails</button>
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>

                            {fenetreDetail === 'true' ? (
                                <>
                                    <div className="fenetreDetail">
                                        <div className="onglet">
                                            <button onClick={() => {ongletDetailSet('stat');}}>Statistiques</button>
                                            <hr />
                                            <button onClick={() => {ongletDetailSet('humeur');}}>Humeur</button>
                                            <hr />
                                            <button onClick={() => {ongletDetailSet('equipement');}}>Equipement</button>
                                        </div>

                                        <br />

                                        {ongletDetail === 'stat' ? (
                                            <>
                                                <div className="haut">
                                                    <div className="texte">
                                                        <p>{joueurCourant.nom}</p>
                                                        <p>Lvl {joueurCourant.niveau}</p>
                                                    </div>
                                                    <Jauge valeur={joueurCourant.vie} max={joueurCourant.vieMax} couleur='green' fond='grey' titre='PV' solo='non' dimension='non' style={{
                                                        margin: '0',
                                                    }} />
                                                    <Jauge valeur={joueurCourant.exp} max={joueurCourant.expMax} couleur='blue' fond='grey' titre='Exp' solo='non' dimension='non'/>
                                                    <Jauge valeur={joueurCourant.magie} max={joueurCourant.magieMax} couleur='blue' fond='grey' titre='Magie' solo='non' dimension='non'/>
                                                    <p>Attaque : {joueurCourant.attaque}</p>
                                                    <p>Défense : {joueurCourant.defense}</p>
                                                    <p>Vitesse : {joueurCourant.vitesse}</p>
                                                    <p>Testostérone : {joueurCourant.testo}</p>
                                                    <p>Courage : {joueurCourant.courage}</p>
                                                </div>
                                                <div className="bas">
                                                    <button className='btnClasse' onClick={() => {fenetreDetailSet('false')}} style={{
                                                        width: '100%',
                                                        margin: '0'
                                                    }}>Fermer les détails</button>
                                                </div>
                                            </>
                                        ) : null }
                                        {ongletDetail === 'equipement' ? (
                                            <>
                                                <div className="haut">
                                                    <div className="equipement">
                                                        {joueurCourant.equipement && joueurCourant.equipement.length > 0 && joueurCourant.equipement.map((element, index) => (
                                                            element.id !== '' ? (
                                                                <Item key={element.id} img={element.img} id={element.id} />
                                                            ) : null
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="bas">
                                                    <button className='btnClasse' onClick={() => {fenetreDetailSet('false')}} style={{
                                                        width: '100%',
                                                        margin: '0'
                                                    }}>Fermer les détails</button>
                                                </div>
                                            </>
                                        ) : null }
                                        {ongletDetail === 'humeur' ? (
                                            <>
                                                <div className="haut">
                                                    <div className="equipement">
                                                        <div className="humeur">
                                                            <Jauge valeur={joueurCourant.joie} max={100} couleur='yellow' fond='grey' titre='Joie' solo='non' dimension='non'/>
                                                            <Jauge valeur={joueurCourant.tristesse} max={100} couleur='violet' fond='grey' titre='Tristesse' solo='non' dimension='non'/>
                                                            <Jauge valeur={joueurCourant.peur} max={100} couleur='black' fond='grey' titre='Peur' solo='non' dimension='non'/>
                                                            <Jauge valeur={joueurCourant.colere} max={100} couleur='red' fond='grey' titre='Colère' solo='non' dimension='non'/>
                                                        </div>  
                                                    </div>
                                                </div>
                                                <div className="bas">
                                                    <button className='btnClasse' onClick={() => {fenetreDetailSet('false')}} style={{
                                                        width: '100%',
                                                        margin: '0'
                                                    }}>Fermer les détails</button>
                                                </div>
                                            </>
                                        ) : null }
                                    </div>
                                </>
                            ) : null }


                            {/* ========== FENETRE HISTORIQUE ========== */}


                            {historiqueAffichage === 'true' ? (
                                <Historique 
                                    historique={historique}
                                    historiqueType={historiqueType}
                                    historiqueTypeSet={historiqueTypeSet}
                                    historiqueAffichageSet={historiqueAffichageSet}
                                />
                            ) : null }
                            {historiqueAffichage === 'false' ? (
                                <button className='btnClasse ouvrirHistorique' onClick={() => {historiqueAffichageSet('true');}}>Ouvrir l'historique</button>
                            ) : null }


                            {/* ========== FENETRE GAIN ITEM ========== */}


                            {affichageGainItem === 'true' ? (
                                <GainItem 
                                    affichageGainItemSet={affichageGainItemSet} 
                                    storeCombat={storeCombat} 
                                    storeEnnemis={storeEnnemis} 
                                    storeJoueurs={storeJoueurs} 
                                    storeInventaire={storeInventaire}
                                />
                            ) : null }
                        </div>
                    ) : null }
                </div>
            ) : null }
        </>
    )
}

export default FenetreCombatEnnemi