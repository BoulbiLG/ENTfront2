import React, { useEffect, useState } from 'react';

import normal from '../../asset/plan/combat/normal.png';
import hero from '../../asset/personnage/celestin/dos.png';

import { recupererListeStoreCombat } from './recupererListeStoreCombat';
import { recupererListeStore } from '../../fonction/recupererListeStore';
import { calculVitesse } from './calculVitesse';

import './fenetreCombat.css';
import '../../css/classe/btn.css';

import combatStore from '../../variableGlobal/global/combatStore';

import Particule from '../../components/particule/Particule';
import Jauge from '../../components/jauge/Jauge';
import Item from '../../components/item/CaseItem';

const FenetreCombat = () => {

    const storeCombat = combatStore();
    const { combat } = combatStore();
    const { type } = combatStore();

    const [fenetreDetail, fenetreDetailSet] = useState('false');
    const [ongletDetail, ongletDetailSet] = useState('stat');
    const [tour, tourSet] = useState('');
    const [joueurCourant, joueurCourantSet] = useState([]);

    let fond = normal;

    if (combatStore.type == 'normal') {
        fond = normal;
    }

    const storeEnnemis = recupererListeStoreCombat();
    const storeJoueurs = recupererListeStore();

    console.log(storeEnnemis);
    console.log(storeJoueurs);

    useEffect(() => {

        console.log('Refresh combat');
        if (storeCombat.combat == 'oui') {
            console.log('Rvfde');
            calculVitesse(storeEnnemis, storeJoueurs, tourSet);
        }

    }, [combat, type]);
        
    return (
        <div className='conteneurCombat'>
            {storeCombat.combat === 'oui' ? (
                <div className='FenetreCombat' style={{background: `url(${fond})`}}>

                    <p className='tour'>Tour : {tour}</p>

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
                    <div className="hero">
                        <img src={hero} alt={hero} />
                    </div>
                    <div className="choix">
                        <p>Qui dois agir ?</p>
                        <br />
                        {storeJoueurs.map(({nom}) => (
                            <button className='nomJoueur'>{nom}</button>
                        ))}
                    </div>
                    <div className="listeJoueur">
                        {storeJoueurs.map((nom, index) => (
                            <>
                                <div className="carteJoueur">
                                    <div className="gauche" style={{backgroundColor: 'white', background: `url(${storeJoueurs[index].imgTete})`}}></div>
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
                </div>
            ) : null }
        </div>
    )
}

export default FenetreCombat