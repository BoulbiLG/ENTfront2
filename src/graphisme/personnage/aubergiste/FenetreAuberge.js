import React, { useState, useEffect } from 'react';

import '../../../css/classe/fenetre1.css';
import '../../../css/classe/btn.css';
import './fenetreAuberge.css';

import equipeStore from '../../../variableGlobal/personnage/equipeStore';
import CelestinStore from '../../../variableGlobal/personnage/CelestinStore';

import Jauge from '../../../components/jauge/Jauge';

import { tourneeAlcoolEffet } from './tourneeAlcoolEffet';
import { dormirEffet } from './dormirEffet';
import { recupererListeStore } from '../../../fonction/recupererListeStore';
import { nouvelleEffet } from './nouvelleEffet';

const FenetreAuberge = () => {

    const [dialogue, dialogueSet] = useState("Alors mon p'tit marlou, ça picole ou quoi ?");
    const [stickers, stickersSet] = useState('https://image.noelshack.com/fichiers/2019/35/5/1567118242-marloubob86.jpg');
    const [choix, choixSet] = useState('');
    const [choixAlcool, choixAlcoolSet] = useState('');
    const [tourneeAlcool, tourneeAlcoolSet] = useState('false');
    const [prixSeul, prixSeulSet] = useState(0);
    const [prixTournee, prixTourneeSet] = useState(0);
    const [prixChambre, prixChambreSet] = useState(0);

    const storeEquipe = equipeStore();
    const storeCelestin = CelestinStore();

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const recupererListeStoreBrut = recupererListeStore();

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

    const boire = () => {
        choixSet('boire');
        dialogueSet("Ahhhhh ! V'la qui'm plait l'gamin, je te sers quoi l'ami ?");
        stickersSet('https://image.noelshack.com/fichiers/2020/26/5/1593191191-ahi-marlou.png');
    }

    const dormir = () => {
        const prixBrut = 16 * storeEquipe.nom.length;
        console.log(storeEquipe.nom.length);
        const pourcentageTournee = prixBrut * 20 / 100;
        prixChambreSet(parseInt(prixBrut + pourcentageTournee));
        choixSet('dormir');
        dialogueSet("Rhaa la jeunesse... ça sait plus s'amuser... d'mon temps ça s'battait pour un pastaga.");
        stickersSet('https://image.noelshack.com/fichiers/2020/06/5/1581093667-parigots-tetes-de-veau.png');
    }

    const dormirEffetBrut = () => {
        if (storeCelestin.argent >= prixChambre) {
            dormirEffet(prixChambre, recupererListeStoreBrut);
            dialogueSet("Allez fais de beau rêve.");
            stickersSet('https://image.noelshack.com/fichiers/2021/26/3/1625034016-issoucochonou.png');
            choixSet('');
        } else {
            dialogueSet("Tu te fous de qui sale tarlouse ? Reviens quand t'auras du pognon.");
            stickersSet('https://image.noelshack.com/fichiers/2020/06/5/1581093667-parigots-tetes-de-veau.png');
            tourneeAlcoolSet('false');
        }
    }

    const nouvelle = () => {
        const reponse = nouvelleEffet();
        dialogueSet(reponse);
        stickersSet('https://image.noelshack.com/fichiers/2020/26/5/1593171755-ff99dd51-e2d6-4d9b-87dc-fb4d5f54d279.jpeg');
    }

    const tourneeAlcoolEffetBrut = () => {
        if (storeCelestin.argent >= prixTournee) {
            tourneeAlcoolEffet(choixAlcool, prixTournee, recupererListeStoreBrut);
            dialogueSet("SANTEEE MON MARLOU !");
            stickersSet('https://image.noelshack.com/fichiers/2022/20/1/1652718341-johnny-depp-new-real-megapint-removebg-preview.png');
            tourneeAlcoolSet('false');
        } else {
            dialogueSet("Tu te fous de qui sale tarlouse ? Reviens quand t'auras du pognon.");
            stickersSet('https://image.noelshack.com/fichiers/2020/06/5/1581093667-parigots-tetes-de-veau.png');
            choixSet('');
        }
    }

    const achatAlcool = (choix, prix) => {
        choixAlcoolSet(choix);
        dialogueSet("Bon choix gamin ! Tournée générale ou un verre ?");
        stickersSet('https://image.noelshack.com/fichiers/2020/26/7/1593299257-marlouvillageoise.png');
        tourneeAlcoolSet('true');

        const pourcentage = prix * 20 / 100;
        prixSeulSet(parseInt(prix + pourcentage));

        const prixBrut = prix * storeEquipe.nom.length;
        console.log(storeEquipe.nom.length);
        const pourcentageTournee = prixBrut * 20 / 100;
        prixTourneeSet(parseInt(prixBrut + pourcentageTournee));
    }

    
    
    return (
        <div 
            className='duo'
            style={{
                position: 'absolute',
                left: `${position.x - 520}px`,
                top: `${position.y - 530}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className='FenetreAuberge fenetre2Classe'>
                <div className="info">
                    <p>Captain404</p>
                    <p>Classe : aubergiste / modo</p>
                </div>
                <hr />
                <div className="dialogue">
                    <div className="ligne">
                        <p>{dialogue}</p>
                        <img src={stickers} alt="sticker" />
                    </div>
                </div>
                <div className="boutonSection">
                    <p>Votre argent : {storeCelestin.argent}€</p>
                    <button className='btnClasse' onClick={() => {boire();}}>C'est la tournée du patron !</button>
                    <button className='btnClasse' onClick={() => {dormir();}}>Je vais aller pioncer je crois . . .</button>
                    <button className='btnClasse' onClick={() => {nouvelle();}}>C'est quoi les dernieres nouvelles sinon ?</button>
                </div>
                <div className="choix">



                    {/* ========== BOIRE ========== */}



                    {choix === 'boire' ? (
                        <>
                            <div className="liste">
                                <div className="carte ricard" onClick={() => {achatAlcool('ricard', 42);}}>
                                    <div className="haut">
                                        <p>Ricard</p><p>42€</p>
                                    </div><hr /><p>Fait disparaitre la tristesse</p>
                                </div>
                                <div className="carte pastis" onClick={() => {achatAlcool('pastis', 41);}}>
                                    <div className="haut">
                                        <p>Pastis</p><p>41€</p>
                                    </div><hr /><p>Fait disparaitre la peur</p>
                                </div>
                                <div className="carte cidre" onClick={() => {achatAlcool('cidre', 50);}}>
                                    <div className="haut">
                                        <p>Cidre</p><p>50€</p>
                                    </div><hr /><p>Monte la joie au max</p>
                                </div>
                                <div className="carte rouge" onClick={() => {achatAlcool('rouge', 45);}}>
                                    <div className="haut">
                                        <p>Vin rouge</p><p>45€</p>
                                    </div><hr /><p>Fait disparaitre la colère</p>
                                </div>
                            </div>
                            {tourneeAlcool === 'true' ? (
                                <div className="tourne fenetre1Classe">
                                    <div className="prix">
                                        <div className="lignePrix"><p>Prix pour une tournée générale (TVA incluse) : </p><p>{prixTournee}€</p></div>
                                        <p className='petit' style={{fontSize: '0.6rem'}}>Tous vos coéquipier boivent</p>
                                        {/*<div className="lignePrix"><p>Prix pour un verre (TVA incluse) : </p><p>{prixTournee}€</p></div>
                                        <p className='petit' style={{fontSize: '0.6rem'}}>Le coequipier de votre choix boit</p>*/}
                                    </div>
                                    <div className="boutonListe">
                                        <button className='btnClasse' onClick={() => {tourneeAlcoolEffetBrut();}}>Tournée général !</button>
                                        {/*<button className='btnClasse'>Un verre seulement</button>*/}
                                        <button className='btnClasse' onClick={() => {tourneeAlcoolSet('false');}}>Rien en fait</button>
                                    </div>
                                </div>
                            ) : null }
                        </>
                    ) : null }



                    {/* ========== BOIRE ========== */}



                    {choix === 'dormir' ? (
                        <div className="dormir fenetre1Classe">
                            <div className="prix">
                                <div className="lignePrix"><p>Prix pour une chambre (TVA incluse) : </p><p>{prixChambre}€</p></div>
                                <p className='petit' style={{fontSize: '0.6rem'}}>Tous vos coéquipier sont soignés</p>
                            </div>
                            <div className="boutonListe">
                                <button className='btnClasse' onClick={() => {dormirEffetBrut();}}>Oui je paye</button>
                                <button className='btnClasse' onClick={() => {choixSet('');}}>Rien en fait</button>
                            </div>
                        </div>
                    ) : null }



                    {/* ========== NOUVELLE ========== */}



                </div>
            </div>



            {/* ========== LISTE JOUEUR ========== */}



            <div className="joueur fenetre2Classe">
                <div className="haut">
                    <p>Vos coéquipier</p>
                </div>
                <hr />
                <div className="listeCoequipier">
                    {recupererListeStoreBrut.map((element, index) => (
                        <div className="carte">
                            <p>{element.nom}</p>
                            <Jauge valeur={element.vie} max={element.vieMax} couleur='green' fond='grey' titre='PV' solo='non' dimension='non'/>
                            <Jauge valeur={element.joie} max={100} couleur='yellow' fond='grey' titre='Joie' solo='non' dimension='non'/>
                            <Jauge valeur={element.tristesse} max={100} couleur='violet' fond='grey' titre='Tristesse' solo='non' dimension='non'/>
                            <Jauge valeur={element.peur} max={100} couleur='black' fond='grey' titre='Peur' solo='non' dimension='non'/>
                            <Jauge valeur={element.colere} max={100} couleur='red' fond='grey' titre='Colère' solo='non' dimension='non'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FenetreAuberge