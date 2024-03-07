import React, { useState, useEffect } from 'react';

import { replique } from './repliqueJoueur';
import { verificationDialogue } from './verificationDialogue';
import { recupererStoreDynamique } from '../../fonction/recupererStoreDynamique';

import equipeStore from '../../variableGlobal/personnage/equipeStore';
import refreshStore from '../../variableGlobal/global/refresh';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';
import combatStore from '../../variableGlobal/global/combatStore';
import musiqueStore from '../../variableGlobal/audio/musiqueStore';

import FenetreDon from './FenetreDon';
import Jauge from '../../components/jauge/Jauge';

import '../../css/classe/fenetreDrag.css'
import '../../css/classe/btn.css';
import './fenetreDialogue.css';

const FenetreDialogue = ({ storePersonnage }) => {

    const [dialogueAffichage, dialogueAffichageSet] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    
    const [affichageFenetreDon, affichageFenetreDonSet] = useState('false');
    const [compteurDialogue, compteurDialogueSet] = useState(1);

    const personnageStore = recupererStoreDynamique(storePersonnage.nom);

    const storeEquipe = equipeStore();
    const storeRefresh = refreshStore();
    const storeCelestin = CelestinStore();
    const storeCombat = combatStore();
    const storeMusique = musiqueStore();

    //

    const handlePrevious = () => {
        compteurDialogueSet((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const handleNext = () => {
        if (storePersonnage.dialogue && storePersonnage.dialogue.dialogueNormal) {
            const totalDialogues = Object.keys(storePersonnage.dialogue.dialogueNormal).length;
    
            compteurDialogueSet((prev) => (prev < totalDialogues ? prev + 1 : prev));
        } else {
            console.error("storePersonnage.dialogue.dialogueNormal est indéfini");
        }
    };
    

    const dialogueAffichage2 = storePersonnage.dialogue.dialogueNormal[`r${compteurDialogue}`];

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
        className='dialogueConteneur fenetreDrag'
        style={{
            position: 'absolute',
            left: `${position.x - 600}px`,
            top: `${position.y - 330}px`,
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        >
        <p>{storePersonnage.nom} :</p>
        <div className="dialogue">
            <div className="texte">
                {dialogueAffichage === null ? (
                    <div className="ligne">
                        <p>{dialogueAffichage2.texte}</p>
                        <img src={dialogueAffichage2.sticker} alt={dialogueAffichage2.sticker} style={{height: '70px', width: '100px'}} />
                    </div>
                ) : 
                    <div className="ligne">
                        <p>{dialogueAffichage[0].texte}</p>
                        <img src={dialogueAffichage[0].sticker} alt={dialogueAffichage[0].sticker} style={{height: '70px', width: '100px'}} />
                    </div>
                }
            </div>
            <div className="boutonDialogue">
                <button className='btnClasse' onClick={() => {handlePrevious()}}><span class="material-symbols-outlined">arrow_back</span></button>
                <button className='btnClasse' onClick={() => {handleNext()}}><span class="material-symbols-outlined">arrow_right_alt</span></button>
            </div>
        </div>
        <div className="choix">
            <br />
            <br />
            <div className="humeur">
                <div className="colonne">
                    <div className="humeurColonne">
                        <Jauge className='jauge' dimension='non' valeur={personnageStore.joie} max={100} couleur='yellow' fond='grey' titre='Joie' solo='non'/>
                        <Jauge className='jauge' dimension='non' valeur={personnageStore.tristesse} max={100} couleur='violet' fond='grey' titre='Tristesse' solo='non'/>
                        <Jauge className='jauge' dimension='non' valeur={personnageStore.peur} max={100} couleur='black' fond='grey' titre='Peur' solo='non'/>
                        <Jauge className='jauge' dimension='non' valeur={personnageStore.colere} max={100} couleur='red' fond='grey' titre='Colère' solo='non'/>
                    </div>
                    <div className="autre">
                        <p>Confiance : {personnageStore.confiance}</p>
                        <p>Empathie : {personnageStore.empathie}</p>
                    </div>
                </div>
                </div>
                <hr />
                <p>Que voulez vous dire à {personnageStore.nom} ?</p>
                {replique.map(({ phrase, id, type, consequence }) => (
                    !personnageStore.questionPose.includes(id) && (
                    <>
                        {type != 'don' && type != 'recruter' ? (
                            <button className='btnClasse dialogueJoueur' key={id} onClick={() => {verificationDialogue(personnageStore.nom, id, type, consequence, dialogueAffichageSet, personnageStore, storeEquipe, storeRefresh);}}>{phrase}</button>
                        ) : 
                            <>
                                {affichageFenetreDon == 'false' ? (
                                    <>
                                    <button className='btnClasse dialogueJoueur donner' key={id} onClick={() => {affichageFenetreDonSet('true')}}>{phrase}</button>
                                    </>
                                ) : 
                                    <button className='btnClasse dialogueJoueur donner' key={id} onClick={() => {affichageFenetreDonSet('false')}}>{phrase}</button>
                                }
                            </>
                        }
                    </>
                    )
                ))}
                <button className='btnClasse dialogueJoueur recruter' onClick={() => {verificationDialogue(personnageStore.nom, 99999, 'recruter', {}, dialogueAffichageSet, personnageStore, storeEquipe, storeRefresh);}}>Je te veux dans mon équipe !</button>
                {personnageStore.sexe === 'f' ? (
                    <button className='btnClasse dialogueJoueur baiser' onClick={() => {verificationDialogue(personnageStore.nom, 99999, 'baiser', {}, dialogueAffichageSet, personnageStore, storeEquipe, storeRefresh, '', storeCelestin);}}>Je veux te baiser {personnageStore.nom}, tu vas jouir :cash:</button>
                ) : null }
                {personnageStore.nom === 'Blondin' ? (
                    <button className='btnClasse dialogueJoueur blondin' onClick={() => {verificationDialogue(personnageStore.nom, 99999, 'blondin', {}, dialogueAffichageSet, personnageStore, storeEquipe, storeRefresh, '', storeCelestin, storeCombat, storeMusique);}}>Casse toi de mon chemin sale violeur de poule</button>
                ) : null }
            </div>

            {affichageFenetreDon == 'true' ? (
                <FenetreDon personnageStore={personnageStore} />
            ) : null }
            {affichageFenetreDon == 'true' ? (
                <>
                    <div className='fermer' >
                        <button className='btnClasse' onClick={() => {affichageFenetreDonSet('false')}}>Fermer</button>
                    </div>
                </>
            ) : null }

        </div>
    );
};

export default FenetreDialogue;