import React, { useEffect, useState, useCallback } from 'react';

import './commentaire.css';

import refreshStore from '../home/creerCompte/refreshStore';

const Commentaire = ({ jeuCourant }) => {

    const UrlOnline = 'https://mondedesentsback.onrender.com';
    const UrlLocal = 'http://localhost:5000';

    const storeRefresh = refreshStore();
    //const { pseudo } = refreshStore();

    const { refresh } = refreshStore();
    let pseudo = sessionStorage.getItem('pseudo');

    useEffect(() => {
        pseudo = sessionStorage.getItem('pseudo');
    }, [refresh]);

    const [commentaire, commentaireSet] = useState([]);
    const [avertissement, avertissementSet] = useState('');
    const [texte, texteSet] = useState('');

    const posterCommentaire = async (pseudo, texte) => {

        const id = jeuCourant.id;

        try {
            const response = await fetch(`${UrlLocal}/compte/posterCommentaire`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ pseudo, texte, id }),
            });
      
            if (response.ok) {
                console.log('posterCommentaire réussie !');
                recupererCommentaire();
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

    const recupererCommentaire = useCallback(async () => {
        const id = jeuCourant.id;
        try {
            const response = await fetch(`${UrlLocal}/compte/recupererCommentaire/${id}`);
            if (response.ok) {
                const commentaires = await response.json();
                console.log('Commentaires récupérés:', commentaires);
                commentaireSet(commentaires);
                // Traiter les commentaires récupérés
            } else {
                console.error('Erreur lors de la récupération des commentaires');
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    }, [jeuCourant.id, commentaireSet]);

    useEffect(() => {
        recupererCommentaire();
    }, [recupererCommentaire]);

    return (
        <div className='Commentaire'>
            <div className="commentaireListe">
                {commentaire.map((element, index) => (
                    <div className="commentaire">
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p>{element.pseudo}</p>
                            <p style={{fontSize: '0.8rem', fontStyle: 'italic'}}>{element.date}</p>
                        </div>
                        <hr />
                        <br />
                        <p>{element.texte}</p>
                    </div>
                ))}
            </div>
            <div className="poste">
                <br />
                <hr />
                <br />
                <h4>Poster un commentaire</h4>
                <br />
                <textarea name="" id="" cols="30" rows="5" value={texte} onChange={(e) => {texteSet(e.target.value)}}></textarea>
                <button className='boutonBasique publier' onClick={() => {
                    posterCommentaire(pseudo, texte);
                }} style={{maxWidth: '20vh'}}>Publier</button>
            </div>
        </div>
    )
}

export default Commentaire