import React, { useState, useEffect } from 'react';

import CaseItem from '../../components/item/CaseItem';
import { depotItem } from './depotItem';
import { recuperationItem } from './recuperationItem';
import { recupererStoreCoffreDynamique } from '../../fonction/stockage/recupererStoreCoffreDynamique';

import inventaireStore from '../../variableGlobal/inventaire/inventaireStore';
import deplacementStore from '../../variableGlobal/global/deplacementStore';

import './fenetreStockage.css';
import '../../css/classe/fenetre1.css';

const FenetreCoffre = ({ type, idStockage, inventaireStockage, stockageStore }) => {

    const storeInventaire = inventaireStore();
    const storeDeplacement = deplacementStore();

    const [storeCoffre, storeCoffreSet] = useState([]);
    const [avertissement, avertissementSet] = useState('');

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    
    const storeCoffreBrut = recupererStoreCoffreDynamique(storeDeplacement.lieux);

    useEffect(() => {
        setTimeout(() => {
            avertissementSet('');
        }, 5000);
    }, [avertissement]);

    useEffect(() => {
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
            className='FenetreStockage fenetre2Classe'
            style={{
                position: 'absolute',
                left: `${position.x - 320}px`,
                top: `${position.y - 330}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="coffreSection">
                <p> Contenu du {type}</p>
                <div className='coffreSection2'>
                {storeCoffreBrut.stockage.find(stock => stock.idStockage === idStockage)?.inventaire.map(({ action, cible, important, id, nom, quantite, img, description, valeur, type, poid }) => (
                    <CaseItem
                        key={id}
                        img={img}
                        quantite={quantite}
                        onClick={() => {recuperationItem(
                            idStockage,
                            action, 
                            cible, 
                            important, 
                            id, 
                            nom, 
                            img, 
                            description, 
                            valeur, 
                            type,
                            storeCoffreBrut,
                            inventaireStockage,
                            storeInventaire,
                            poid,
                            avertissementSet,
                        )}}
                    />
                ))}

                </div>
            </div>
            <hr />
            <div className="inventaireSection">
                <div className="info">
                    <p>Votre inventaire</p>
                    <p>Poid : {storeInventaire.poid} / {storeInventaire.poidMax}</p>
                </div>
                <div className='inventaireSection2'>
                    {storeInventaire.inventaire.map(({ action, cible, important, id, nom, quantite, img, description, valeur, type, poid }) => (
                        <CaseItem
                            key={id}
                            img={img}
                            quantite={quantite}
                            onClick={() => {depotItem(
                                idStockage,
                                action, 
                                cible, 
                                important, 
                                id, 
                                nom, 
                                img, 
                                description, 
                                valeur, 
                                type,
                                storeCoffreBrut,
                                inventaireStockage,
                                storeInventaire,
                                poid,
                            )}}
                        />
                    ))}
                </div>
            </div>
            { avertissement !== '' ? ( <p className='avertissement'>{avertissement}</p>) : null }
        </div>
    )
}

export default FenetreCoffre