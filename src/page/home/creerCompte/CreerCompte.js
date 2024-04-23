import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import refreshStore from './refreshStore';

import './creerCompte.css';
import logo from '../../../asset/site internet/image/logo2.png';

const CreerCompte = () => {

    const { refresh } = refreshStore();
    let pseudo = sessionStorage.getItem('pseudo');

    useEffect(() => {
        pseudo = sessionStorage.getItem('pseudo');
        console.log(pseudo)
    }, [refresh]);

    //const { pseudo } = refreshStore();

    const navigate = useNavigate();

    const [afficherMenu, afficherMenuSet] = useState('false');
        
    return (
        <div className='CreerCompte'>
                <div className="gauche">
                    <span class="material-symbols-outlined" onClick={() => {afficherMenuSet('true')}}>menu</span>
                </div>
            {afficherMenu === 'true' ? (
                <div className="menu">
                    <span class="material-symbols-outlined" onClick={() => {afficherMenuSet('false')}}>close</span>
                    <br /><br /><br />
                    <div className="categorie">
                        <Link to="/chat">Chat</Link>
                        <Link to="/jeu-video">Jeu vidéo</Link>
                        <Link to="/musique">Musique</Link>
                        <Link to="/film-animation">Film & Animation</Link>
                        <Link to="/dessin">Dessin</Link>
                        <Link to="/fic-bd">Fic & BD</Link>
                        <Link to="/divers">Divers</Link>
                        <Link to="/youtube">Chaine Youtube</Link>
                    </div>
                </div>
            ) : null }
            <div className="milieu">
                <h1>Onche Cinématique Univers</h1>
                <img src={logo} alt={logo} onClick={() => {navigate('/');}} style={{cursor: 'pointer'}}/>
            </div>
            <div className="droite">
                {!pseudo && pseudo == '' || pseudo == null || pseudo == undefined ? (
                    <>
                        <div className="inscription">
                            <Link to="/inscription">Inscription</Link>
                        </div>
                        <div className="connexion">
                            <Link to="/connexion">Connexion</Link>
                        </div>
                    </>
                ) :
                    <div className="profil">
                        <img
                        onClick={() => {navigate('/profil');}}
                        src="https://onche.org/img/profile.svg"
                        alt="profil"
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default CreerCompte