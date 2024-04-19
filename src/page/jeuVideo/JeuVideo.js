import React from 'react';

import './jeuVideo.css';

import { jeuVideoDonnee } from './jeuVideoDonnee';

import CreerCompte from '../home/creerCompte/CreerCompte';

import { useNavigate } from 'react-router-dom';

const JeuVideo = () => {

    const navigate = useNavigate();


    return (
        <div className='JeuVideo'>
            <CreerCompte />
            <br /><br /><br /><br /><br /><br /><br />
            <div className="centralisation">
                <div className="sectionAffiche">
                    {jeuVideoDonnee.map((element, index) => (
                        <div className="affiche" style={{background: `url(${element.affiche})`}} onClick={() => {
                            navigate(`/${element.lien}`);
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
            </div>
        </div>
    )
}

export default JeuVideo