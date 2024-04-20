import React, { useState } from 'react';

import './jeuVideo.css';
import './nouvellePartie.css';

import { jeuVideoDonnee } from './jeuVideoDonnee';

import CreerCompte from '../home/creerCompte/CreerCompte';

import { useNavigate } from 'react-router-dom';

const JeuVideo = () => {

    const navigate = useNavigate();

    const [jeuCourant, jeuCourantSet] = useState([]);
    const [jeuAffichage, jeuAffichageSet] = useState('false');
    const [avertissement, avertissementSet] = useState('');
    const [nomPartie, nomPartieSet] = useState('');

    const creerPartie = () => {
        if (nomPartie === '') {
            avertissementSet('Vous devez entrer un nom de partie');
        } else {
            avertissementSet('');
            navigate(`/${jeuCourant.lien}`);
        }
    }

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
                                console.log(element)
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
                                <div className="bas">
                                    <button className='boutonBasique' onClick={() => {
                                        jeuAffichageSet('nouvellePartie');
                                    }}>Nouvelle partie</button>
                                    <button className='boutonBasique' onClick={() => {
                                        jeuAffichageSet('false');
                                    }}>Charger Une partie</button>
                                    <button className='boutonBasique' onClick={() => {
                                        jeuAffichageSet('false');
                                    }}>Copier une partie</button>
                                    <button className='boutonBasique supprimer' onClick={() => {
                                        jeuAffichageSet('false');
                                    }}>Supprimer une partie</button>
                                </div>
                            </div>
                            <hr />
                            <div className="droiteJeu">
                                <h2 style={{textAlign: 'Center'}}>Commentaire</h2>
                                <br />
                                <div className="commentaireListe">
                                    <div className="commentaire">
                                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <p>Pseudo</p>
                                            <p style={{fontSize: '0.8rem', fontStyle: 'italic'}}>date</p>
                                        </div>
                                        <hr />
                                        <br />
                                        <p>Un jeu super ! vraiment beaucoup aimé. Hate de voir l'épisode 2 en dépit de ent's</p>
                                    </div>
                                </div>
                                <div className="poste">
                                    <br />
                                    <hr />
                                    <br />
                                    <h4>Poster un commentaire</h4>
                                    <br />
                                    <textarea name="" id="" cols="30" rows="5"></textarea>
                                    <button className='boutonBasique publier' onClick={() => {
                                        jeuAffichageSet('false');
                                        jeuCourantSet([]);
                                    }}>Publier</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null }
                {jeuAffichage === 'nouvellePartie' ? (
                    <div className="nouvellePartie">
                        <h3 style={{color: 'white', fontWeight: '500'}}>Créer une nouvelle partie sur {jeuCourant.titre}</h3>
                        <br />
                        <input placeholder='Entrez un nom de partie...' type="text" value={nomPartie} onChange={(e) => {nomPartieSet(e.target.value)}} />
                        <br />
                        <button className='boutonBasique publier' onClick={() => {
                            creerPartie();
                        }}>Créer la partie {nomPartie}</button>
                        <br />
                        <br />
                        <button className='retour' onClick={() => {
                            jeuAffichageSet('true');
                        }}>Retour</button>
                        <br />
                        <br />
                        {avertissement !== '' ? (
                            <div className="avertissement">
                                <p>{avertissement}</p>
                            </div>
                        ) : null }
                    </div>
                ) : null }
            </div>
        </div>
    )
}

export default JeuVideo