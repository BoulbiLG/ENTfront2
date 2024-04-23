import React, { useEffect, useState, useCallback } from 'react';

import './jeuVideo.css';
import './nouvellePartie.css';

import { jeuVideoDonnee } from './jeuVideoDonnee';

import Commentaire from './Commentaire';
import CreerCompte from '../home/creerCompte/CreerCompte';
import NouvellePartie from './NouvellePartie';
import ChargerPartie from './ChargerPartie';
import CopierPartie from './CopierPartie';

import refreshStore from '../home/creerCompte/refreshStore';

import { useNavigate } from 'react-router-dom';

const JeuVideo = () => {

    const UrlOnline = 'https://mondedesentsback.onrender.com';
    const UrlLocal = 'http://localhost:5000';

    const storeRefresh = refreshStore();
    //const { pseudo } = refreshStore();

    const { refresh } = refreshStore();
    let pseudo = sessionStorage.getItem('pseudo');

    useEffect(() => {
        pseudo = sessionStorage.getItem('pseudo');
    }, [refresh]);

    const navigate = useNavigate();

    const [jeuCourant, jeuCourantSet] = useState([]);
    const [commentaire, commentaireSet] = useState([]);
    const [partie, partieSet] = useState([]);
    const [jeuAffichage, jeuAffichageSet] = useState('false');
    const [avertissement, avertissementSet] = useState('');
    const [texte, texteSet] = useState('');
    const [nomPartie, nomPartieSet] = useState('');
    
    return (
        <div className='JeuVideo'>
            <CreerCompte />
            <br /><br /><br /><br /><br /><br /><br />
            <p>{jeuAffichage}</p>
            <div className="centralisation">
                {jeuAffichage === 'false' ? (
                    <div className="sectionAffiche">
                        {jeuVideoDonnee.map((element, index) => (
                            <div className="affiche" style={{background: `url(${element.affiche})`}} onClick={() => {
                                //navigate(`/${element.lien}`);
                                jeuCourantSet(element);
                                jeuAffichageSet('true');
                                console.log(element);
                            }}>
                                <div className="haut">
                                    <p style={{fontSize: '1.2rem'}}>{element.titre}</p>
                                    <p style={{fontSize: '0.8rem'}}>{element.sousTitre}</p>
                                </div>
                                <div className="bas">
                                    <p>Par {element.auteur}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null }
                {jeuAffichage === 'true' ? (
                    <div className="centralisation">
                        <div className="sectionJeu">
                            <div className="hautUltime">
                                <div className="gaucheJeu">
                                    <div className="hautSection">
                                        <div className="gaucheAffiche" style={{background: `url(${jeuCourant.affiche})`}}></div>
                                        <div className="droiteInfo">
                                            <div className="haut">
                                                <h3 style={{fontSize: '2rem'}}>{jeuCourant.titre}</h3>
                                                <p>{jeuCourant.sousTitre}</p>
                                                <p style={{fontStyle: 'italic', fontSize: '0.8rem'}}>Par {jeuCourant.auteur}</p>
                                            </div>
                                            <div className="basSection">
                                                <button className='retour' onClick={() => {
                                                    jeuAffichageSet('false');
                                                    jeuCourantSet([]);
                                                }}>Retour</button>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    {jeuCourant.type === 'grand' ? (
                                        <div className="bas">
                                            <button className='boutonBasique' onClick={() => {
                                                jeuAffichageSet('nouvellePartie');
                                            }}>Nouvelle partie</button>
                                            <button className='boutonBasique' onClick={() => {
                                                jeuAffichageSet('chargerPartie');
                                            }}>Charger Une partie</button>
                                            <button className='boutonBasique' onClick={() => {
                                                jeuAffichageSet('copierPartie');
                                            }}>Copier une partie</button>
                                            <button className='boutonBasique supprimer' onClick={() => {
                                                jeuAffichageSet('supprimerPartie');
                                            }}>Supprimer une partie</button>
                                        </div>
                                    ) :
                                        <button className='boutonBasique' onClick={() => {
                                            navigate(jeuCourant.lien);
                                        }}>Jouer</button>
                                    }
                                </div>
                                <hr />
                                <div className="droiteJeu">
                                    <h3 style={{fontSize: '2rem', textAlign: 'Center'}}>Présentation</h3>
                                    <div className="description">
                                        {jeuCourant.description.map((element, index) => (
                                            <p>{element}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <br /><br /><br />
                            <div className="basUltime">
                                <h2 style={{textAlign: 'Center'}}>Commentaire</h2>
                                <br />
                                <Commentaire jeuCourant={jeuCourant}/>
                            </div>
                        </div>
                    </div>
                ) : null }
                {jeuCourant.type === 'grand' ? (
                    <>
                        {jeuAffichage === 'nouvellePartie' ? (
                            <div className="nouvellePartie">
                                <NouvellePartie jeuCourant={jeuCourant} jeuAffichageSet={jeuAffichageSet}/>
                            </div>
                        ) : null }
                        {jeuAffichage === 'chargerPartie' ? (
                            <div className="chargerPartie">
                                <ChargerPartie jeuCourant={jeuCourant} jeuAffichageSet={jeuAffichageSet}/>
                            </div>
                        ) : null }
                        {jeuAffichage === 'copierPartie' ? (
                            <div className="copierPartie">
                                <CopierPartie jeuCourant={jeuCourant} jeuAffichageSet={jeuAffichageSet}/>
                            </div>
                        ) : null }
                        {jeuAffichage === 'supprimerPartie' ? (
                            <div className="supprimerPartie">
                                <CopierPartie jeuCourant={jeuCourant} jeuAffichageSet={jeuAffichageSet}/>
                            </div>
                        ) : null }
                    </>
                ) : null }
            </div>
        </div>
    )
}

export default JeuVideo