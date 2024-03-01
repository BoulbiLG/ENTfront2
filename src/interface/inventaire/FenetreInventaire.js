import React, {useState, useEffect} from 'react';

import './fenetreInventaire.css';
import '../../css/classe/fenetreDrag.css';

import inventaireStore from '../../variableGlobal/inventaire/inventaireStore';
import CaseItem from '../../components/item/CaseItem';
import ProfilEquipier from '../profilEquipier/ProfilEquipier';

import { utiliserItem } from './utiliserItem';
import { jeterItem } from './jeterItem';

import equipeStore from '../../variableGlobal/personnage/equipeStore';
import { recupererStoreDynamique } from '../../fonction/recupererStoreDynamique';

const FenetreInventaire = ({ indexFenetre }) => {



    // ==================== DECLARATION VARIABLE ==================== //



    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const { inventaire } = inventaireStore();
    const storeInventaire = inventaireStore();
    const storeEquipier = equipeStore();
    const equipierCourant = storeEquipier.courant;
    const equipierNom = storeEquipier.nom;
    const [itemCourant, itemCourantSet] = useState('');

    const poid = storeInventaire.poid; 
    const poidMax = storeInventaire.poidMax; 

    const storeJoueur = recupererStoreDynamique(equipierCourant);

    //const [avertissement, avertissementSet] = useState('Aucun avertissement.');
    
    

    // ==================== FONCTION UTILISER ITEM ==================== //



    const utiliserItemEnvoie = (id, type, cible, action, quantite, equipe, poid) => {
         utiliserItem(id, type, cible, action, quantite, equipe, equipierCourant, storeInventaire, storeJoueur, poid)
    }



    // ==================== FONCTION JETER ITEM ==================== //



    const jeterItemEnvoie = (id, type, cible, action, quantite, equipe, poid) => {
        jeterItem(id, type, storeInventaire, storeJoueur, poid)
    }



    // ==================== FENETRE BOUGEABLE ==================== //
    


    useEffect(() => {
        // Centrer la fenêtre initialement
        const centerWindow = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const dialogWidth = 50;
            const dialogHeight = 30;

            setPosition({
                x: (windowWidth - dialogWidth) / 2,
                y: (windowHeight - dialogHeight) / 2,
            });
        };

        centerWindow();
        window.addEventListener('resize', centerWindow);

        return () => {
        window.removeEventListener('resize', centerWindow);
        };
    }, []);
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };
    const handleMouseUp = () => {
        setIsDragging(false);
    };
    const handleMouseMove = (e) => {
        if (isDragging) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;

        setPosition({
            x: position.x + deltaX,
            y: position.y + deltaY,
        });

        setDragStart({ x: e.clientX, y: e.clientY });
        }
    };
    


    return (
        <div 
            className='FenetreInventaire fenetreDrag'
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
                position: 'absolute',
                left: `${position.x - 600}px`,
                top: `${position.y - 330}px`,
                width: '130vh',
                height: '70vh',
            }}
        >
            <div className="haut">
                <div className="info">
                    <p>Inventaire</p>
                    <p>Poid : {poid} / {poidMax}</p>
                    <p>Argent : {storeInventaire.argent}€</p>
                </div>
                <hr />
            </div>
            <div className="milieu">
                <div className="exGauche">
                    <div className="listeProfil">
                        {equipierNom.map((nom) => (
                            <ProfilEquipier nom={nom} courant={equipierCourant} />
                        ))}
                    </div>
                </div>
                <div className="ok">
                <div className="gauche">
                    {inventaire.map(({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible}) => (
                        <div>
                            <CaseItem  img={id} onClick={() => {itemCourantSet(id)}} quantite={quantite} equipe={equipe} />
                        </div>
                    ))}
                </div>
                </div>
                <div className="droite">
                    {inventaire.map(({ id, nom, quantite, description, important, valeur, type, cible, action, equipe, img, poid }) => (
                        id === itemCourant ? (
                            <div key={id} className="infosSection">
                                <div className="info">
                                    <div className="ligne"><p className='index'>Nom : </p><p className='valeur'>{nom}</p></div>
                                    <div className="ligne"><p className='index'>Quantité : </p><p className='valeur'>{quantite}</p></div>
                                    <div className="ligne"><p className='index'>Valeur à la vente : </p><p className='valeur'>{valeur}€</p></div>
                                    <div className="ligne"><p className='index'>Poid : </p><p className='valeur'>{poid}</p></div>
                                    <p className='index'>Description : </p>
                                    <div className="description">
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <br />
                                <div className="image">
                                    <img src={img} alt={nom} style={{height: '20vh', width: '20vh',}} />
                                </div>
                                <br />
                                <button className='btnClasse' onClick={() => {utiliserItemEnvoie(id, type, cible, action, quantite, equipe, poid)}}>Utiliser</button>
                                <button className='btnClasse' onClick={() => {jeterItemEnvoie(id, type, cible, action, quantite, equipe, poid)}}>Jeter</button>
                                <div className="action">
                                    <div className="avertissement"></div>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FenetreInventaire