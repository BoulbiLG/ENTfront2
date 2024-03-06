import React, { useState } from 'react';

import baseStore from '../../variableGlobal/base/baseStore';

import { recupererListeStore } from '../../fonction/recupererListeStore';

import './dormir.css';
import '../../css/classe/btn.css';

const Dormir = ({ idBase }) => {

    const [tempsDormir, tempsDormirSet] = useState(10);
    const [risque, risqueSet] = useState(0);
    const [recuperationVie, recuperationVieSet] = useState(0);

    const storeBase = baseStore();
    var protection = storeBase.base[idBase - 1].protection;
    var piege = storeBase.base[idBase - 1].piege;

    const storeJoueurs = recupererListeStore();

    const calculerRisque = () => {
        if (protection == 0) {protection = 1;}

        const tauxPiege = piege / 10 + 1;
        const tauxProtection = (tauxPiege * protection) + (24 - tempsDormir);

        if (tauxProtection > 100) {tauxProtection = 100}

        risqueSet(tauxProtection);

        // calcul recuperation

        const tauxRecup = tempsDormir / 24 * 100 + 5;
        recuperationVieSet(parseInt(tauxRecup));

    }

    const dormir = () => {

            for (let i = 0; i < tempsDormir; i++) {
                const nombreAleatoire = Math.floor(Math.random() * 100) + 1;

                if (nombreAleatoire > risque) {
                    console.log('Le groupe est attaqué !', ', nombreAleatoire : ', nombreAleatoire, ', risque : ', risque);
                } else {
                    console.log('Bon dodo');
                }
            }

        // ajouter vie

        for (let i = 0; i < storeJoueurs.length; i++) {

            const store = storeJoueurs[i];
    
            const vie = store.vie;
            const vieMax = store.vieMax;
            const tauxVie = parseInt((vieMax - vie)  * recuperationVie / 100);
            if (tauxVie === 99) {tauxVie = 100};
    
            store.modifier('vie', vie + tauxVie);
    
        }
        
        return
    }
        
    return (
        <div className='Dormir'>
            <div className="haut">
                <p>Combien de temps voulez vous dormir ?</p>
            </div>
            <div className="milieu">
                <input type="range" min={1} max={24} value={tempsDormir} onChange={(e) => {tempsDormirSet(e.target.value); calculerRisque();}} />
                <button className='btnClasse' onClick={() => {dormir();}}>Dormir {tempsDormir} heure(s)</button>
            </div>
            <div className="bas">
                <p>Risque de se faire attaquer : {100 - risque}%</p>
                <p>Recupération de la vie : {recuperationVie}%</p>
            </div>
        </div>
    )
}

export default Dormir