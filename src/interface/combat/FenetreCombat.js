import React, { useEffect, useState } from 'react';

import normal from '../../asset/plan/combat/normal.png';
import hero from '../../asset/personnage/celestin/dos.png';

import { recupererListeStoreCombat } from './recupererListeStoreCombat';
import { recupererListeStore } from '../../fonction/recupererListeStore';
import { calculVitesse } from './fonction/calculVitesse';
import { attaquer } from './fonction/joueur/attaquer';
import { attaquerEnnemi } from './fonction/ennemi/attaquerEnnemi';
import { creationTabStratEnnemi } from './fonction/creationTabStratEnnemi';

import '../../css/classe/btn.css';
import './fenetreCombat.css';
import './fenetreCombatAction.css';

import inventaireStore from '../../variableGlobal/inventaire/inventaireStore';
import combatStore from '../../variableGlobal/global/combatStore';
import equipeStore from '../../variableGlobal/personnage/equipeStore';
import parametreStore from '../../variableGlobal/global/parametreStore';
import { lexiqueArme } from '../../variableGlobal/item/lexiqueArme';

import Particule from '../../components/particule/Particule';
import Jauge from '../../components/jauge/Jauge';
import Item from '../../components/item/CaseItem';
import Historique from './Historique';
import Parametre from '../parametre/Parametre';

const FenetreCombat = () => {

    const storeCombat = combatStore();
    const { nom } = combatStore();
    const { combat } = combatStore();
    const { type } = combatStore();
    const storeEquipe = equipeStore();
    const storeParametre = parametreStore();
    const { FenetreHistoriqueCombatApparition } = parametreStore();
    const { FenetreHistoriqueCombatType } = parametreStore();

    const [etape, etapeSet] = useState('qui');
    const [fenetreDetail, fenetreDetailSet] = useState('false');
    const [ongletDetail, ongletDetailSet] = useState('stat');
    const [tour, tourSet] = useState('');
    const [joueurCourant, joueurCourantSet] = useState([]);
    const [joueurUtilisable, joueurUtilisableSet] = useState(storeEquipe.nom);
    const [joueurUtilisable2, joueurUtilisableSet2] = useState(nom);
    
    const [historique, historiqueSet] = useState([]);
    const [historiqueAffichage, historiqueAffichageSet] = useState(FenetreHistoriqueCombatApparition);
    const [historiqueType, historiqueTypeSet] = useState(FenetreHistoriqueCombatType);
    
    const [ennemiEnVie, ennemiEnVieSet] = useState(nom);
    const [strategieEnnemi, strategieEnnemiSet] = useState();

    //console.log('store nom : ', nom);
    //console.log('storeEquipe.nom : ', storeEquipe.nom);
    //console.log('storeCombat.nom : ', storeCombat.nom);
    //console.log('nom : ', nom);
    //console.log('ennemiEnVie : ', ennemiEnVie);

    let fond = normal; if (combatStore.type == 'normal') {fond = normal;}

    var storeEnnemis = recupererListeStoreCombat();
    var storeInventaire = inventaireStore();
    var storeJoueurs = recupererListeStore();

    const lancerTourEnnemi = (storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet) => {

        //console.log(joueurUtilisable.length);
        //console.log(joueurUtilisable);

        // VERIFIE SI LES ENNEMI PEUVENT ATTAQUER
        if (joueurUtilisable.length == 1) {
            setTimeout(() => {
                //console.log('tour ennemi');
                joueurUtilisableSet(storeEquipe.nom);
                attaquerEnnemi(storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet, joueurUtilisableSet, joueurUtilisable, storeEquipe.nom, ennemiEnVie, historique, historiqueSet);
            }, 1000);
        }
    }
    
    useEffect(() => {
        if (storeCombat.combat == 'oui') {

            // CALCUL VITESSE
            calculVitesse(storeEnnemis, storeJoueurs, tourSet);

            // CREATION TABLEAU STRAT ENNEMI
            creationTabStratEnnemi(storeEnnemis, strategieEnnemiSet);

            ennemiEnVieSet(nom);

        }
    }, [combat, type, etape]);
        
    return (
        <div className='conteneurCombat'>

            {storeCombat.combat === 'oui' ? (
                <div className='FenetreCombat' style={{background: `url(${fond})`}}>
    

                    <div className="parametreFenetre">
                        <Parametre />
                    </div>

                    {/* ========== LISTE ENNEMI ========== */}


                    <div className="listeEnnemi">
                        {storeCombat.nom.map((nom, index) => (
                            <div className="ennemi">
                                <div className="info">
                                    <p>{storeEnnemis[index].nom}</p>
                                    <p>Lvl {storeEnnemis[index].niveau}</p>
                                </div>
                                <Jauge valeur={storeEnnemis[index].vie} max={storeEnnemis[index].vieMax} couleur='green' fond='grey' titre='PV' solo='non' dimension='non'/>
                                <img key={index} src={storeEnnemis[index].imgNormal} alt={nom}/>
                            </div>
                        ))}
                    </div>


                    <div className="hero"><img src={hero} alt={hero} /></div>


                    {/* ========== FENETRE CHOIX ========== */}


                    <div className="choix">
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
                            </>
                        ) : null }
                        {etape === 'quoi' ? (
                            <div className='quoi'>
                                <div className="main">
                                    <button onClick={() => {etapeSet('mainG');}} className='btnClasse mainG'>Main Gauche</button>
                                    <button onClick={() => {etapeSet('mainD');}} className='btnClasse mainD'>Main Droite</button>
                                </div>
                                <button onClick={() => {etapeSet('magie');}} className='btnClasse'>Magie</button>
                                <button onClick={() => {etapeSet('objet');}} className='btnClasse'>Utiliser un Objet</button>
                                <button onClick={() => {etapeSet('rien');}} className='btnClasse'>Ne rien faire</button>
                                <button onClick={() => {etapeSet('qui');}} className='btnClasse'>Retour</button>
                            </div>
                        ) : null }
                        {etape === 'mainG' || etape === 'mainD' ? (
                            <div className='cible'>
                                <p>Qui voulez vous visez ?</p>
                                <br />
                                {storeEnnemis.map((nom, index) => {
                                    if (storeEnnemis[index].vie > 0) {
                                        return (
                                    <>
                                        <button className='cible' onClick={() => {
                                            attaquer(etape, storeEnnemis[index], joueurCourant, lexiqueArme, storeInventaire, storeCombat, joueurUtilisableSet, tourSet, ennemiEnVieSet, ennemiEnVie, storeCombat.nom, historique, historiqueSet);
                                            joueurUtilisableSet((ancienJoueurUtilisable) => {
                                                const nouvelJoueurUtilisable = ancienJoueurUtilisable.filter(joueur => joueur !== joueurCourant.nom);
                                                return nouvelJoueurUtilisable;
                                            });
                                            etapeSet('qui');
                                            lancerTourEnnemi(storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet)
                                        }} >{storeEnnemis[index].nom}</button>
                                    </>
                                );
                            } else {
                                return null;
                            }
                            })}
                                <button className='cible retour' onClick={() => {etapeSet('quoi')}} >Retour</button>
                            </div>
                        ) : null }
                    </div>


                    {/* ========== FENETRE DETAIL ========== */}


                    <div className="listeJoueur" style={{display: 'flex'}}>
                        <div className="gauche" style={{flex: '1', display: 'flex', flexWrap: 'wrap'}}>
                            {storeJoueurs.map((nom, index) => (
                                <>
                                    <div className="carteJoueur">
                                        <div className="gauche" style={{backgroundColor: 'white', background: `url(${storeJoueurs[index].imgIcone})`}}></div>
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
                            {storeEnnemis.map((nom, index) => (
                                <>
                                    <div className="carteJoueur">
                                        <div className="gauche" style={{backgroundColor: 'white', background: `url(${storeEnnemis[index].imgIcone})`}}></div>
                                        <hr />
                                        <div className="info">
                                            <div className="texte">
                                                <p>{storeEnnemis[index].nom}</p>
                                                <p>Lvl {storeEnnemis[index].niveau}</p>
                                            </div>
                                            <Jauge valeur={storeEnnemis[index].vie} max={storeEnnemis[index].vieMax} couleur='green' fond='grey' titre='PV' solo='non' dimension='non' style={{
                                                margin: '0',
                                            }} />
                                            {fenetreDetail === 'false' ? (
                                            <button onClick={() => {joueurCourantSet(storeEnnemis[index]); fenetreDetailSet('true');}} className='btnClasse' style={{
                                                padding: '0.5vh',
                                                width: '100%',
                                                margin: '0',
                                            }}>Détails</button>
                                            ) :
                                            <button onClick={() => {joueurCourantSet(storeEnnemis[index]); fenetreDetailSet('false');}} className='btnClasse' style={{
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
                                    <button onClick={() => {ongletDetailSet('objet');}}>Inventaire</button>
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
                                            <div className="humeur">
                                                <Jauge valeur={joueurCourant.joie} max={100} couleur='yellow' fond='grey' titre='Joie' solo='non' dimension='non'/>
                                                <Jauge valeur={joueurCourant.tristesse} max={100} couleur='violet' fond='grey' titre='Tristesse' solo='non' dimension='non'/>
                                                <Jauge valeur={joueurCourant.peur} max={100} couleur='black' fond='grey' titre='Peur' solo='non' dimension='non'/>
                                                <Jauge valeur={joueurCourant.colere} max={100} couleur='red' fond='grey' titre='Colère' solo='non' dimension='non'/>
                                            </div>  
                                        </div>
                                        <div className="bas">
                                            <button className='btnClasse' onClick={() => {fenetreDetailSet('false')}} style={{
                                                width: '100%',
                                                margin: '0'
                                            }}>Fermer les détails</button>
                                        </div>
                                    </>
                                ) :
                                <div className="listeObjet">
                                    <div className="haut">
                                        {joueurCourant.equipement.map(({ img, id }) => (
                                            <Item key={id} img={img} onClick={() => {}} />
                                        ))}
                                    </div>
                                    <div className="bas">
                                        <button className='btnClasse' onClick={() => {fenetreDetailSet('false')}} style={{
                                            width: '100%',
                                            margin: '0'
                                        }}>Fermer les détails</button>
                                    </div>
                                </div>
                                }
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
                </div>
            ) : null }
        </div>
    )
}

export default FenetreCombat