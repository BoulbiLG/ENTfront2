import React, { useState } from 'react';

import './objet.css';
import '../../css/classe/btn.css';

import { utiliserSort } from './fonction/joueur/magie/utiliserSort';
import { attaquerEnnemi } from './fonction/ennemi/attaquerEnnemi';
import { utiliserItem } from '../inventaire/utiliserItem';

import { lexiqueArme } from '../../variableGlobal/item/lexiqueArme';
import equipeStore from '../../variableGlobal/personnage/equipeStore';
import inventaireStore from '../../variableGlobal/inventaire/inventaireStore'

import CaseItem from '../../components/item/CaseItem';

const Objet = ({ etapeSet, joueurCourant, storeEnnemis, storeCombat, historique, historiqueSet, ennemiEnVie, joueurUtilisableSet, joueurUtilisable, storeJoueurs, strategieEnnemi, strategieEnnemiSet }) => {

    const dimension = 60;

    ennemiEnVie = storeCombat.ennemiEnVie;
    
    const storeEquipe = equipeStore();
    const storeInventaire = inventaireStore();
    
    const [avertissement, avertissementSet] = useState('');
    const [cible, cibleSet] = useState('false');
    const [itemCourant, itemCourantSet] = useState([]);
    
    console.log(storeInventaire.inventaire);

    // UTILISER UN SORT
    const utiliserSortBrut = (joueurCourant, storeCombat, storeEnnemis, historique, historiqueSet, avertissementSet, ennemiEnVie, action, id, img, type, cible, poid) => {

        utiliserItem(id, type, cible, action, '', '', '', storeInventaire, storeJoueurs, poid, img)
        etapeSet('qui');

        historiqueSet([...historique, {
            icone: storeJoueurs.imgIcone,
            couleurFond: 'rgb(109, 255, 109)',
            couleurPolice: 'black',
            texte: `${storeJoueurs.nom} utilise l'objet ${id}`,
            resume: `${storeJoueurs.nom} => ${id}`,
        }]);

        joueurUtilisableSet((ancienJoueurUtilisable) => {
            const nouvelJoueurUtilisable = ancienJoueurUtilisable.filter(joueur => joueur !== joueurCourant.nom);
            return nouvelJoueurUtilisable;
        });

        lancerTourEnnemi(storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, '', strategieEnnemi, strategieEnnemiSet)
    }



    // VERIFIER TOUR ENNEMI
    const lancerTourEnnemi = (storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet) => {

        

        // VERIFIE SI LES ENNEMI PEUVENT ATTAQUER
        if (joueurUtilisable.length === 1) {
            setTimeout(() => {
                //console.log('tour ennemi');
                joueurUtilisableSet(storeEquipe.nom);
                attaquerEnnemi(storeEnnemis, storeJoueurs, lexiqueArme, storeCombat, tourSet, strategieEnnemi, strategieEnnemiSet, joueurUtilisableSet, joueurUtilisable, storeEquipe.nom, ennemiEnVie, historique, historiqueSet);
            }, 1000);
        }
    }

    return (
        <div className='Magie' >
            {cible === 'false' ? (
                <div className="listeItem">
                    {storeInventaire.inventaire.map(({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid}) => (
                            <div className='item'>
                                {type === 'consomable' ? (
                                    <CaseItem  img={img} onClick={() => {
                                        itemCourantSet({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible});
                                        utiliserSortBrut(
                                            joueurCourant,
                                            storeCombat, 
                                            storeEnnemis, 
                                            historique, 
                                            historiqueSet, 
                                            avertissementSet,
                                            ennemiEnVie,
                                            action, id, img, type, cible, poid
                                        );
                                    }} quantite={quantite} equipe={equipe} />
                                ) : null}
                            </div>
                        ))}
                    <button className='btnClasse' style={{width: '100%', margin: 0, backgroundColor: 'black', color: 'white', padding: '0.6vh'}} onClick={() => {etapeSet('quoi');}}>Retour</button>
                </div>
            ) : null }
            <div className="avertissement">
                <p>{avertissement}</p>
            </div>
        </div>
    )
}

export default Objet