import React from 'react';

import '../../css/classe/btn.css';
import './fenetreCombat.css';
import './fenetreCombatAction.css';

import parametreStore from '../../variableGlobal/global/parametreStore';

const Historique = ({historique, historiqueType, historiqueTypeSet, historiqueAffichageSet}) => {

    //console.log('historique : ', historique);

    const { FenetreHistoriqueCombatWidth } = parametreStore();
    const { FenetreHistoriqueCombatHeight } = parametreStore();
    const { FenetreHistoriqueCombatX } = parametreStore();
    const { FenetreHistoriqueCombatY } = parametreStore();
    const { FenetreHistoriqueCombatOpacite } = parametreStore();
    const { FenetreHistoriqueCombatTaille } = parametreStore();

    // ==================== MODIFIER AFFICHAGE FENETRE HISTORIQUE ==================== //

    
    return (
        <div className="historique" style={{
            width: `${FenetreHistoriqueCombatWidth}vh`,
            height: `${FenetreHistoriqueCombatHeight}vh`,
            maxHeight: `${FenetreHistoriqueCombatHeight}vh`,
            opacity: `${FenetreHistoriqueCombatOpacite}%`,
            boxShadow: `3px 3px 0px rgba(0, 0, 0, ${FenetreHistoriqueCombatOpacite / 100})`,
            left: `${FenetreHistoriqueCombatX}vh`,
            bottom: `${FenetreHistoriqueCombatY}vh`,
            scale: `${FenetreHistoriqueCombatTaille}%`,
        }}>
            <button className='fermerHistorique' onClick={() => {historiqueAffichageSet('false');}}><span class="material-symbols-outlined">close</span></button>
            <div className="parametre">
            <div className="ongletHistorique">
                <button onClick={() => {historiqueTypeSet('propre');}}>Propre</button>
                <button onClick={() => {historiqueTypeSet('resume');}}>Resumé</button>
            </div>
            </div>
            <br />
            <div className="listeLigne">
                {historique.length > 0 && historique.map((element, index) => (
                    <div className='ligne' key={index} style={{backgroundColor: `${element.couleurFond}`}}>
                        <img style={{
                            height: '30px',
                            width: '30px',
                            borderRadius: '50%',
                        }} src={element.icone} alt={element.icone} />
                        <hr style={{border: `0px solid ${element.couleurPolice}`}}/>
                        {historiqueType === 'propre' ? (
                            <p style={{color: `${element.couleurPolice}`}}>{element.texte}</p>
                        ) :
                            <p style={{color: `${element.couleurPolice}`}}>{element.resume}</p>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Historique