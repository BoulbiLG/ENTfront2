import React, {useState, useEffect} from 'react';

import './fenetreStat.css';
import '../../css/classe/fenetreDrag.css';

import { recupererStoreDynamique } from '../../fonction/recupererStoreDynamique';
import { retirerObjetEffet } from '../inventaire/retirerEffetItem';
import { verificationDialogue } from '../dialogue/verificationDialogue';

import Jauge from '../../components/jauge/Jauge';
import Item from '../../components/item/CaseItem';

import ProfilEquipier from '../profilEquipier/ProfilEquipier';
import equipeStore from '../../variableGlobal/personnage/equipeStore';
import inventaireStore from '../../variableGlobal/inventaire/inventaireStore'
import deplacementStore from '../../variableGlobal/global/deplacementStore'

import { replique } from '../dialogue/repliqueJoueur';

const FenetreStat = ({ indexFenetre }) => {



    // ==================== DECLARATION VARIABLE ==================== //



    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const [statJoueur, statJoueurSet] = useState([]);

    const storeEquipier = equipeStore();
    const storeInventaire = inventaireStore();
    const storeDeplacement = deplacementStore();
    
    const storeJoueur = recupererStoreDynamique(storeEquipier.courant);

    const [dialogueAffichage, dialogueAffichageSet] = useState('');
    
    useEffect(() => {
        const set = () => {
            statJoueurSet(storeJoueur);
        }
        set();
    }, [storeJoueur]);



    const retirerEquipement = (id, type, inventaireStore, joueurStore) => {

        joueurStore.modifierIdParType(type, '');
    
        const infoItem = inventaireStore.inventaire.find((element) => element.id === id);
    
        if (infoItem) {
            retirerObjetEffet(id, infoItem.type, infoItem.action, inventaireStore, joueurStore);
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

    const attendsMoiIci = () => {
        storeJoueur.modifier('zoneX', storeDeplacement.zoneX);
        storeJoueur.modifier('zoneY', storeDeplacement.zoneY);
        storeJoueur.modifier('zoneZ', storeDeplacement.zoneZ);

        storeEquipier.retirerNom(storeJoueur.nom);
    }

    const rentreChezToi = () => {
        storeJoueur.modifier('zoneX', storeJoueur.zoneXBase);
        storeJoueur.modifier('zoneY', storeJoueur.zoneYBase);
        storeJoueur.modifier('zoneZ', storeJoueur.zoneZBase);

        storeEquipier.retirerNom(storeJoueur.nom);
    }

    const plusAmi = () => {
        storeJoueur.modifier('zoneX', storeJoueur.zoneXBase);
        storeJoueur.modifier('zoneY', storeJoueur.zoneYBase);
        storeJoueur.modifier('zoneZ', storeJoueur.zoneZBase);

        storeEquipier.retirerNom(storeJoueur.nom);
        storeJoueur.modifier('etat', 'PNJ');
        storeJoueur.modifier('soumis', 'non');
        storeJoueur.modifier('confiance', 0);
        storeJoueur.modifier('empathie', 0);
        storeJoueur.modifierIdParType('tete', '');
        storeJoueur.modifierIdParType('buste', '');
        storeJoueur.modifierIdParType('jambe', '');
        storeJoueur.modifierIdParType('pied', '');
        storeJoueur.modifierIdParType('mainG', '');
        storeJoueur.modifierIdParType('mainD', '');
        storeJoueur.modifierIdParType('bras', '');
    }
    


    return (
        <div 
            className='FenetreStat fenetreDrag'
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
            <p>{indexFenetre}</p>
            <p>Stat</p>
            <hr />
            <div className="haut">
                <div className="listeInfo">
                    <p>Nom : {statJoueur.nom}</p>
                    <p>Classe : {statJoueur.classe}</p>
                    <p>Body count : {statJoueur.bodycount}</p>
                </div>
            </div>
            <div className="milieu">
                <div className="gauche">
                    <div className="listeProfil">
                        {storeEquipier.nom.map((nom) => (
                            <ProfilEquipier nom={nom} courant={storeEquipier.courant} />
                        ))}
                    </div>
                </div>
                <div className="centre">
                    <div className="centreHaut">
                        <div className="image">
                            <img src={statJoueur.imgTete} alt={statJoueur.imgTete} />
                            <div className="status">
                                <p>Status : {statJoueur.status}</p>
                            </div>
                            <div className="niveau">
                                <p>Niveau : </p>
                                <p className='lvl'>{statJoueur.niveau}</p>
                            </div>
                        </div>
                        <div className="inventaire">
                            <p>Inventaire de {statJoueur.nom} :</p>
                            <div className="centralisation2">
                                <div className="liste">
                                    {statJoueur.equipement && statJoueur.equipement.length > 0 && statJoueur.equipement.map(({ id, type }) => (
                                        <Item key={id} img={id} onClick={() => {retirerEquipement(id, type, storeInventaire, statJoueur)}} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="centreBas">
                        <p>Que voulez vous dire à {storeEquipier.courant}</p>
                        <hr />
                        <p>{dialogueAffichage.texte}</p>
                        <p>{dialogueAffichage.sticker}</p>
                        {storeEquipier.courant !== 'Celestin' ? (
                            <>
                                {replique.map(({ phrase, id, type, consequence }) => (
                                    !storeJoueur.questionPose.includes(id) && (
                                    <>
                                        {type != 'don' ? (
                                            <button className='btnClasse dialogueJoueur' key={id} onClick={() => {verificationDialogue(storeJoueur.nom, id, type, consequence, dialogueAffichageSet, storeJoueur, 'stat');}}>{phrase}</button>
                                        ) : null }
                                    </>
                                    )
                                ))}
                                <button className='btnClasse dialogueJoueur consigne' onClick={() => {attendsMoiIci();}}>
                                    Attends moi ici
                                </button>
                                <button className='btnClasse dialogueJoueur consigne' onClick={() => {rentreChezToi();}}>
                                    Quitte mon équipe, rentre chez toi mais on reste ami
                                </button>
                                <button className='btnClasse dialogueJoueur consigne' onClick={() => {plusAmi();}}>
                                    T'es plus mon ami, dégage
                                </button>
                            </>
                        ) : <><p>On ne peut pas se parler a soi même . . .</p><br /><br /><br /><br /><br /><p>. . . a moins d'être schizo ahi</p></> }
                    </div>
                </div>
                <div className="droite">
                    <div className="centralisation">
                        <div className='basic'>
                            <Jauge valeur={statJoueur.vie} max={statJoueur.vieMax} couleur='green' fond='grey' titre='PV' solo='non' dimension='non'/>
                            <Jauge valeur={statJoueur.exp} max={statJoueur.expMax} couleur='blue' fond='grey' titre='Exp' solo='non' dimension='non'/>
                            <Jauge valeur={statJoueur.magie} max={statJoueur.magieMax} couleur='blue' fond='grey' titre='Magie' solo='non' dimension='non'/>
                        </div>
                        <br />
                        <div className="ensembleTexte">
                            <div className="texte"><p>Attaque : </p><p>{statJoueur.attaque}</p></div>
                            <div className="texte"><p>Défense : </p><p>{statJoueur.defense}</p></div>
                            <div className="texte"><p>Vitesse : </p><p>{statJoueur.vitesse}</p></div>
                            <div className="texte"><p>Testostérone : </p><p>{statJoueur.testo}</p></div>
                        </div>
                        <br />
                        <div className="humeur">
                            <Jauge valeur={statJoueur.joie} max={100} couleur='yellow' fond='grey' titre='Joie' solo='non' dimension='non'/>
                            <Jauge valeur={statJoueur.tristesse} max={100} couleur='violet' fond='grey' titre='Tristesse' solo='non' dimension='non'/>
                            <Jauge valeur={statJoueur.peur} max={100} couleur='black' fond='grey' titre='Peur' solo='non' dimension='non'/>
                            <Jauge valeur={statJoueur.colere} max={100} couleur='red' fond='grey' titre='Colère' solo='non' dimension='non'/>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FenetreStat