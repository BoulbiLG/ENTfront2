import React, {useState, useEffect} from 'react';

import './fenetreBase.css';
import '../../css/classe/fenetreDrag.css';

import CaseItem from '../../components/item/CaseItem';

import inventaireStore from '../../variableGlobal/inventaire/inventaireStore';
import baseStore from '../../variableGlobal/base/baseStore';
import deplacementStore from '../../variableGlobal/global/deplacementStore';
import refreshStore from '../../variableGlobal/global/refresh'

import { utiliserMeuble } from './utiliserMeuble';
import { jeterMeuble } from './jeterMeuble';
import { analysePositionBase } from '../../fonction/analysePositionBase';

const FenetreBase = () => {



    // ==================== DECLARATION VARIABLE ==================== //



    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const [itemCourant, itemCourantSet] = useState('');
    const { setRefresh } = refreshStore();
    const { refresh } = refreshStore();

    const storeInventaire = inventaireStore();
    const storebase = baseStore();
    const storeDeplacement = deplacementStore();
    
    const analyse = analysePositionBase(storeDeplacement.zoneX, storeDeplacement.zoneY, storeDeplacement.zoneZ);

    var idBaseNet = 0;

    if (analyse) {
        idBaseNet = analyse.idBase;
    }
    


    // ==================== FONCTION ==================== //



    const utiliserMeubleBrut = (storeDeplacement, storeInventaire, storebase, type, nom, img, imgItem, description, valeur, poid, action, id, x, y, quantite, protection, piege, idBaseNet) => {
        utiliserMeuble(storeDeplacement, storeInventaire, storebase, type, nom, img, imgItem, description, valeur, poid, action, id, x, y, quantite, protection, piege, idBaseNet);
        if (refresh == false) {    
            setRefresh(true);
        } else {
            setRefresh(false);
        }
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
            className='FenetreBase fenetreDrag'
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
                    <p>Vos meubles</p>
                    <p>Poid des meubles : {storeInventaire.poidMeuble} / {storeInventaire.poidMeubleMax}</p>
                </div>
                <hr />
            </div>
            <div className="milieu">
                <div className="gauche">
                    {storeInventaire.meubles.map(({imgItem, id, quantite}) => (
                        <div>
                            <CaseItem  img={imgItem} onClick={() => {itemCourantSet(id)}} quantite={quantite} />
                        </div>
                    ))}
                </div>
                <div className="droite">
                    {storeInventaire.meubles.map(({type, nom, img, imgItem, description, valeur, poid, action, id, x, y, quantite, protection, piege}) => (
                        id === itemCourant ? (
                            <div key={id} className="infosSection">
                                <div className="info">
                                    <div className="ligne"><p className='index'>Nom : </p><p className='valeur'>{nom}</p></div>
                                    <div className="ligne"><p className='index'>Quantité : </p><p className='valeur'>{quantite}</p></div>
                                    <div className="ligne"><p className='index'>Valeur à la vente : </p><p className='valeur'>{valeur / 2}€</p></div>
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
                                <button className='btnClasse' onClick={() => {utiliserMeubleBrut(storeDeplacement, storeInventaire, storebase, type, nom, img, imgItem, description, valeur, poid, action, id, x, y, quantite, protection, piege, idBaseNet)}}>Utiliser</button>
                                <button className='btnClasse' onClick={() => {jeterMeuble(storeDeplacement, storeInventaire, storebase, type, nom, img, imgItem, description, valeur, poid, action, id, x, y, quantite, protection, piege, idBaseNet)}}>Jeter</button>
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

export default FenetreBase