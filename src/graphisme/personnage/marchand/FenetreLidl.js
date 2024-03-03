import React, { useState, useEffect } from 'react';

import '../../../css/classe/fenetre1.css';
import '../../../css/classe/btn.css';
import './fenetreLidl.css';

import inventaireStore from '../../../variableGlobal/inventaire/inventaireStore';
import CelestinStore from '../../../variableGlobal/personnage/CelestinStore';

import { item } from './itemMarchand';

import { acheter } from './acheter';
import { vendre } from './vendre';
import { recupererListeStore } from '../../../fonction/recupererListeStore';

import CaseItem from '../../../components/item/CaseItem';

const FenetreLidl = () => {

    const recupererListeStoreBrut = recupererListeStore();

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const [choix, choixSet] = useState('acheter');
    const [typeAchat, typeAchatSet] = useState('item');
    const [typeVente, typeVenteSet] = useState('item');
    const [codeReduction, codeReductionSet] = useState('');
    const [quantiteItem, quantiteItemSet] = useState(1);
    const [dialogue, dialogueSet] = useState('Que souhaitez vous acheter jeune goy ?');
    const [sticker, stickerSet] = useState('https://image.noelshack.com/fichiers/2022/47/2/1669139408-risitas-rabbin.png');

    const [itemCourant, itemCourantSet] = useState('');

    const storeInventaire = inventaireStore();
    const storeCelestin = CelestinStore();

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
            className='FenetreLidl fenetre2Classe'
            style={{
                position: 'absolute',
                left: `${position.x - 520}px`,
                top: `${position.y - 630}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >



            <div className="choix">
                <button className='onglet' onClick={() => {choixSet('acheter')}}>Acheter</button>
                <hr />
                <button className='onglet' onClick={() => {choixSet('vendre')}}>Vendre</button>
            </div>
            
            <div className="sectionDialogue">
                <div className="ligne">
                    <p>{dialogue}</p>
                    <img src={sticker} alt={sticker} style={{heigh: '70px', width: '100px'}} />
                </div>
            </div>

            <hr />

            <div className="titre">
                {choix === 'acheter' ? (
                    <p>A l'achat :</p>
                ) : <p>A la vente :</p> }
            </div>

            <p className='argent'>Votre argent : {storeCelestin.argent}€</p>
            <p className='argent'>Poid total : {storeInventaire.poid} / {storeInventaire.poidMax}</p>



            {/* ========== ACHETER ========== */}



            {choix === 'acheter' ? (
                <div className="acheter sectionType">
                    <div className="typeAchat">
                        <button className='btnClasse' onClick={() => {typeAchatSet('item')}}>Objets</button>
                        <button className='btnClasse' onClick={() => {typeAchatSet('meuble')}}>Meubles</button>
                    </div>
                </div>
            ) : null }



            {/* ========== VENDRE ========== */}

        

            {choix === 'vendre' ? (
                <div className="acheter sectionType">
                    <div className="typeVente">
                        <button className='btnClasse' onClick={() => {typeVenteSet('item')}}>Objets</button>
                        <button className='btnClasse' onClick={() => {typeVenteSet('meuble')}}>Meubles</button>
                    </div>
                </div>
            ) : null }

            <div className="sectionItem">
                {choix === 'acheter' ? (
                    <>
                        {typeAchat === 'item' ? (
                            <>
                                {item.map(({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid}) => (
                                    <div>
                                        <div className="">
                                        <CaseItem  img={img} onClick={() => {itemCourantSet({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid});}} equipe={equipe} />
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : 
                            <>
                                {item.map(({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid}) => (
                                    <div>
                                        <CaseItem  img={img} onClick={() => {itemCourantSet({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid});}} quantite={quantite} equipe={equipe} />
                                    </div>
                                ))}
                            </>
                        }
                    </>
                ) :
                    <>
                        {typeAchat === 'item' ? (
                            <>
                                {storeInventaire.inventaire.map(({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid}) => (
                                    <div>
                                        <CaseItem  img={img} onClick={() => {itemCourantSet({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid});}} quantite={quantite} equipe={equipe} />
                                    </div>
                                ))}
                            </>
                        ) : 
                            <>
                                {storeInventaire.meubles.map(({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid}) => (
                                    <div>
                                        <CaseItem  img={img} onClick={() => {itemCourantSet({equipe, action, important, id, nom, quantite, img, description, valeur, type, cible, poid});}} quantite={quantite} equipe={equipe} />
                                    </div>
                                ))}
                            </>
                        }
                    </>
                }
            </div>



            {/* ========== ITEM COURANT ========== */}


            {itemCourant !== '' || itemCourant.length !== 0 || itemCourant.nom !== undefined && itemCourant.quantite != undefined  && itemCourant != null ? (
                <div className="descriptionLidl">
                    <div className="hautLidl">
            
                        <div className="section1">
                            <p>Nom : {itemCourant.nom}</p>
                            {choix === 'acheter' ? (
                                <p>Prix (TVA incluse) : {(itemCourant.valeur + itemCourant.valeur * 20 / 100) * quantiteItem} €</p>
                            ) :
                                <p>Prix : {(itemCourant.valeur / 2) * quantiteItem} €</p>
                            }
                            <p>Poid : {itemCourant.poid}</p>
                        </div>
                        <hr />
                        <div className="section2">
                            <div className="sectionGauche">
                                <p>Description : {itemCourant.description}</p>
                            </div>
                            <div className="sectionDroite">
                                <img src={itemCourant.img} alt={itemCourant.img} style={{height: '70px', width: '70px'}}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="bas">
                        {choix === 'acheter' ? (
                            <>
                                <button className='acheter bouton btnClasse' onClick={() => {acheter(itemCourant.valeur + itemCourant.valeur * 20 / 100, codeReduction, itemCourant.id, storeCelestin, storeInventaire, recupererListeStoreBrut, dialogueSet, stickerSet, itemCourant, quantiteItem)}}>Acheter</button>
                                <div className="input">
                                    <input type="text" value={quantiteItem} onChange={(event) => {quantiteItemSet(event.target.value)}}/>
                                    <p className='quantiteInput'>Quantite</p>
                                </div>
                                <input className='code' type="text" placeholder="J'ai un code de réduction" value={codeReduction} onChange={(event) => {codeReductionSet(event.target.value)}}/>
                            </>
                        ) :
                            <>
                                <button className='vendre bouton btnClasse' onClick={() => {vendre(itemCourant.id, itemCourant.valeur / 2, itemCourant.quantite, storeCelestin, storeInventaire, recupererListeStoreBrut, itemCourant, quantiteItem, dialogueSet, stickerSet)}}>Vendre</button>
                                <div className="input">
                                    <input type="text" value={quantiteItem} onChange={(event) => {quantiteItemSet(event.target.value)}}/>
                                    <p className='quantiteInput'>Quantite</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            ) :
                <div className="descriptionLidl"></div>
            }


    
        </div>
    )
}

export default FenetreLidl