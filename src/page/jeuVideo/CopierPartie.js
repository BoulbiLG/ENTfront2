import React, { useEffect, useState, useCallback } from 'react';

import './copierPartie.css';

import refreshStore from '../home/creerCompte/refreshStore';

import { useNavigate } from 'react-router-dom';

const CopierPartie = ({ jeuCourant, jeuAffichageSet }) => {

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

    const recupererPartie = useCallback(async () => {
        pseudo = sessionStorage.getItem('pseudo');
        try {
            const response = await fetch(`${UrlLocal}/compte/recupererPartie`);
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
        recupererPartie();
    }, [recupererPartie]);

    return (
        <div className='ChargerPartie'>
            <h3 style={{color: 'white', fontWeight: '500', textAlign: 'center'}}>Copier une partie sur {jeuCourant.titre}</h3>
            <br />
            {partie.map((element, index) =>(
                <div className="partieCopier">
                    <p>{element.nomPartie}</p>
                    <p>{element.pseudo}</p>
                </div>
            ))}
            <br />
            <button className='retour' onClick={() => {
                jeuAffichageSet('true');
            }}>Retour</button>
        </div>
    )
}

export default CopierPartie