import React, { useEffect, useState, useCallback } from 'react';

import './nouvellePartie.css';

import refreshStore from '../home/creerCompte/refreshStore';

import { useNavigate } from 'react-router-dom';

const NouvellePartie = ({ jeuCourant, jeuAffichageSet }) => {

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

    const [commentaire, commentaireSet] = useState([]);
    const [partie, partieSet] = useState([]);
    const [avertissement, avertissementSet] = useState('');
    const [texte, texteSet] = useState('');
    const [nomPartie, nomPartieSet] = useState('');

    const creerPartie = async () => {
        pseudo = sessionStorage.getItem('pseudo');
        if (nomPartie === '') {
            avertissementSet('Vous devez entrer un nom de partie');
        } else {
            try {
                const response = await fetch(`${UrlLocal}/compte/creerPartie`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ pseudo, nomPartie }),
                });
          
                if (response.ok) {
                    console.log('creerPartie réussie !');
                    avertissementSet('');
                    navigate(`/${jeuCourant.lien}`);
                } else {
                    // Il y a eu une erreur, traite-la
                    const data = await response.json();
                    avertissementSet(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                avertissementSet('Une erreur est survenue lors de l\'inscription');
            }
        }
    }

    return (
        <div className='NouvellePartie'>
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
    )
}

export default NouvellePartie