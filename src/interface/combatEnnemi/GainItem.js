import React, { useEffect, useState } from 'react';

import '../../css/classe/fenetreDrag.css';
import './gainItem.css';

import { calculExp } from './calculExp';
import { dropItem } from './dropItem';
import { recuperationDropItem } from './recuperationDropItem';

import musiqueStore from '../../variableGlobal/audio/musiqueStore';

import Jauge from '../../components/jauge/Jauge';
import CaseItem from '../../components/item/CaseItem';

const GainItem = ({ affichageGainItemSet, storeCombat, storeEnnemis, storeJoueurs, storeInventaire }) => {
    
    const storeMusique = musiqueStore();

    const [listeExpNet, listeExpNetSet] = useState([]);
    const [listeItemNet, listeItemNetSet] = useState([]);
    const [avertissement, avertissementSet] = useState('');

    let listeExp = [];
    let listeItem = [];

    useEffect(() => {

        if (listeExp.length === 0) {

            listeExp = calculExp(storeJoueurs, storeEnnemis);
            listeItem = dropItem(storeEnnemis);
            listeExpNetSet(listeExp);
            listeItemNetSet(listeItem);
            console.log(listeItem);
            console.log('listeExpNet : ', listeExpNet, 'listeItemNet : ', listeItemNet);

        }

    }, []);

    return (
        <div className='GainItem fenetreDrag'>
            <div className="haut">
                <br />
                <h2>Combat gagné !</h2>
                <br />
                <hr />
                <br />
            </div>
            <div className="milieu">
                <div className="gauche">
                    <p style={{textAlign: 'center'}}>Liste des ennemis vaincu</p>
                    <hr />
                    <br />
                    <div className="listeNomEnnemi">
                        {storeEnnemis.ennemi.map((element, index) => (
                            <div className="carteNom">
                                <p className='ennemiNom'>{element.nom}</p>
                                <p className='ennemiNom'>niveau {element.niveau}</p>
                                <img src={element.imgIcone} alt={element.imgIcone} style={{
                                    width: '50px',
                                    height: '50px'
                                }}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="milieu">
                    <div className="listeExp">
                        <p>Exp gagné au combat</p>
                        <hr />
                        <br />
                        {listeExpNet.map((element, index) => (
                            <div className="carteNom">
                                <div className="hautCarte">
                                    <p className='ennemiNom'>{element.nom}</p>
                                    <p className='ennemiNom'>niveau {element.niveau}</p>
                                    <img src={element.imgIcone} alt={element.imgIcone} style={{
                                        width: '50px',
                                        height: '50px'
                                    }}/>
                                </div>
                                <div className="basCarte">
                                    <Jauge valeur={element.exp} max={element.expMax} couleur='blue' fond='grey' titre='Exp' solo='non' dimension='non'/>
                                    <p>{element.nom} a gagné {element.exp} point d'exp.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="droite">
                    <p>Objet gagné</p>
                    <hr />
                    <br />
                    <div className="listeItem">
                        {listeItemNet.map(({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid}) => (
                            <div>
                                <CaseItem
                                    key={id}
                                    img={img}
                                    quantite={quantite}
                                    onClick={() => {recuperationDropItem(
                                        action, 
                                        cible, 
                                        important, 
                                        id, 
                                        nom,
                                        img, 
                                        description, 
                                        valeur, 
                                        type,
                                        storeInventaire,
                                        poid,
                                        listeItemNet,
                                        avertissementSet,
                                        listeItemNetSet);
                                    console.log(listeItemNet);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bas">
                <p>{avertissement}</p>
                <button onClick={() => {
                    storeMusique.modifier('courante', storeCombat.lieuPrecedent);
                    storeMusique.modifier('lecture', 0);
                    storeEnnemis.modifier('ennemi', []);

                    storeCombat.modifier('combat', 'non');
                    storeCombat.modifier('lieuPrecedent', '');
                    storeCombat.modifier('etat', '');
                    storeCombat.modifier('type', '');
                    storeCombat.modifier('tour', '');
                    storeCombat.modifier('nombreEnnemi', 0);
                    storeCombat.modifier('nom', []);
                    storeCombat.modifier('ennemiEnVie', []);
                    storeCombat.modifier('soinTour', []);
                    storeCombat.modifier('historique', []);
                    storeCombat.modifier('effetTemporaire', []);
                    storeCombat.modifier('historiqueAction', []);
                }}>Fermer</button>
            </div>
        </div>
    )
}

export default GainItem