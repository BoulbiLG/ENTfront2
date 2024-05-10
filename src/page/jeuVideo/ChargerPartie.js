import React, { useEffect, useState, useCallback } from 'react';

import './chargerPartie.css';

import refreshStore from '../home/creerCompte/refreshStore';

import { useNavigate } from 'react-router-dom';

const ChargerPartie = ({ jeuCourant, jeuAffichageSet }) => {

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

    const chargerPartie = useCallback(async () => {
        pseudo = sessionStorage.getItem('pseudo');
        try {
            const response = await fetch(`${UrlLocal}/compte/chargerPartie/${pseudo}`);
            if (response.ok) {
                const commentaires = await response.json();
                console.log('chargerPartie récupérés:', commentaires);
                partieSet(commentaires);
                // Traiter les commentaires récupérés
            } else {
                console.error('Erreur lors de la récupération des commentaires');
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    }, [pseudo, partieSet]);

    useEffect(() => {
        chargerPartie();
    }, [chargerPartie]);

    return (
        <div className='ChargerPartie'>
            <h3 style={{color: 'white', fontWeight: '500', textAlign: 'center'}}>Charger une partie sur {jeuCourant.titre}</h3>
            <br />
            {partie.map((element, index) =>(
                <button className='boutonBasique' onClick={() => {
                    sessionStorage.setItem('partieEnCours', element.nomPartie);
                    navigate(`/${jeuCourant.lien}`);
                }}>{element.nomPartie}</button>
            ))}
            <br />
            <button className='retour' onClick={() => {
                jeuAffichageSet('true');
            }}>Retour</button>
        </div>
    )
}

export default ChargerPartie