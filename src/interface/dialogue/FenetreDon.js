import React from 'react';

import '../../css/classe/fenetreDrag.css'
import '../../css/classe/btn.css';
import './fenetreDon.css';

import inventaireStore from '../../variableGlobal/inventaire/inventaireStore';

import CaseItem from '../../components/item/CaseItem';

const FenetreDon = ({ personnageStore }) => {

    const storeInventaire = inventaireStore();

    const donnerObjet = (id) => {
        
        personnageStore.ajouter('confiance', 10);

        if (personnageStore.confiance > 100) {
            personnageStore.modifier('confiance', 100);
        }
        
        const ligneASupprimer = storeInventaire.inventaire.find((element) => element.id === id);
    
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
                {storeInventaire.inventaire.map(({ id, quantite }) => (
                    personnageStore.dialogue.desir.includes(id) && (
                        <CaseItem img={id} quantite={quantite} onClick={() => {donnerObjet(id)}} />
                    )
                ))}
            </div>
        </div>
    )
}

export default FenetreDon