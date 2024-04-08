import React from 'react';

import '../../css/classe/fenetreDrag.css'
import '../../css/classe/btn.css';
import './fenetreDon.css';

import inventaireStore from '../../variableGlobal/inventaire/inventaireStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';

import CaseItem from '../../components/item/CaseItem';

import { lexiqueDivers } from '../../variableGlobal/item/lexiqueDivers';

const FenetreDon = ({ personnageStore, dialogueAffichageSet, affichageFenetreDonSet }) => {

    let repliqueReturn = [];

    const storeInventaire = inventaireStore();
    const storeCelestin = CelestinStore();

    const donnerObjet = (id) => {
        
        const ligneASupprimer = storeInventaire.inventaire.find((element) => element.id === id);
        
        personnageStore.ajouter('confiance', ligneASupprimer.valeur);
    

        if (personnageStore.confiance > 100) {
            personnageStore.modifier('confiance', 100);
        }

        if (personnageStore.nom === 'FranckDubosc') {
            if (storeCelestin.franckCaca === 'utilisable') {
                if (personnageStore.confiance + ligneASupprimer.valeur > 2) {
                    storeCelestin.modifier('franckCaca', 'fini');
                    const ligneAajouter = storeInventaire.inventaire.find((element) => element.id === lexiqueDivers.playstation.id);
                
                    if (ligneAajouter) {
                        storeInventaire.ajouterQuantiteItem(lexiqueDivers.playstation.id, 'quantite', 1);
                        storeInventaire.ajouter('poid', lexiqueDivers.playstation.poid);
                    } else {
                        const ligne = { 
                            equipe: 0, 
                            action: lexiqueDivers.playstation.action, 
                            cible: lexiqueDivers.playstation.cible, 
                            important: lexiqueDivers.playstation.important, 
                            id: lexiqueDivers.playstation.id, 
                            nom: lexiqueDivers.playstation.nom, 
                            quantite: 1, 
                            img: lexiqueDivers.playstation.img, 
                            description: lexiqueDivers.playstation.description, 
                            valeur: lexiqueDivers.playstation.valeur, 
                            type: lexiqueDivers.playstation.type, 
                            poid: lexiqueDivers.playstation.poid
                        };
                        storeInventaire.ajouterLigneInventaire(ligne);
                        storeInventaire.ajouter('poid', lexiqueDivers.playstation.poid);
                    }

                    repliqueReturn.push({texte: 'Tu es bien gentil toi, tiens, rend cette play à Leoben, je lui avais volé. ', sticker: 'https://image.noelshack.com/fichiers/2023/05/7/1675552945-chat.png'})
                    console.log(repliqueReturn);
                    dialogueAffichageSet(repliqueReturn);
                    affichageFenetreDonSet('false');
                }
            }
        }
        
    
        if (ligneASupprimer) {
            if (ligneASupprimer.important === 'non') {
                if (ligneASupprimer.quantite > 1) {
                    storeInventaire.retireQuantiteItem(id, 'quantite', 1);
                } else {
                    storeInventaire.retirerLigneInventaire(id);
                }
            } else {
                return;
            }
        }
        
    }

    return (
        <div className='fenetreDonConteneur fenetreDrag'>
            <p>Voici les objets qui interesse {personnageStore.nom} parmis vos objets :</p>
            <div className="caseItem">
                {storeInventaire.inventaire.map(({ id, quantite, img }) => (
                    personnageStore.dialogue.desir.includes(id) && (
                        <CaseItem img={img} quantite={quantite} onClick={() => {donnerObjet(id)}} />
                    )
                ))}
            </div>
        </div>
    )
}

export default FenetreDon