import React, { useState, useEffect } from 'react';

import '../../css/classe/btn.css';
import '../../css/classe/fenetreDrag.css';
import '../../css/classe/clickable.css'
import './meuble.css';

import baseStore from '../../variableGlobal/base/baseStore';

import Dormir from './Dormir';

import { detruireBase } from './detruireBase';
import { retirerMeuble } from './retirerMeuble';

const Meuble = ({ id, type, nom, img, description, valeur, poid, action, x, y, idBase, nomBaseBrut, protection, piege }) => {



    const storeBase = baseStore();
    
    const [affichageFenetre, affichageFenetreSet] = useState('false');
    const [editionNom, editionNomSet] = useState('false');
    const [fenetreUtiliser, fenetreUtiliserSet] = useState('false');
    const [nomBase, nomBaseSet] = useState(nomBaseBrut);
    const [choix, choixSet] = useState('');
    const [X, Xset] = useState(x);



    // ========== DEPLACEMENT ========== //



    useEffect(() => {
        Xset(x);
    }, [x]);

    useEffect(() => {

        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') {
                Xset(prevX => prevX - 5);
                x = x - 5;
            }
            else if (e.key === 'ArrowRight') {
                Xset(prevX => prevX + 5);
                x = x + 5;
            }
        };
        if (choix == 'deplacer') {
            window.addEventListener('keydown', handleKeyPress);
            return () => {window.removeEventListener('keydown', handleKeyPress);};
        }
    
    }, [choix]);


  
    return (
        <div className='Meuble' style={{bottom: `${y + 100}px`, left: `${X}px`}}>
            <div className="image">
                {choix === 'deplacer' ? (
                    <div className="deplacerChoix">
                        <p className='instruction'>Utiliser les flèches du clavier pour déplacer le meuble.</p>
                        <button className='btnClasse'  onClick={() => {choixSet(''); storeBase.modifierChampsMeuble(id, 'x', X, idBase)}}>Terminer</button>
                    </div>
                ) : null }
                {affichageFenetre === 'false' ? (
                    <img className='meuble' img src={img} alt={img} onClick={() => {affichageFenetreSet('true')}}/>
                ) : null }
                {affichageFenetre === 'true' ? (
                    <img className='meuble' img src={img} alt={img} onClick={() => {affichageFenetreSet('false')}}/>
                ) : null }
            </div>
            <div className="fenetre">
                {affichageFenetre === 'true' ? (
                    <>
                        {choix === '' && fenetreUtiliser === 'false' ? (
                            <>
                                <div className="listeBouton">
                                    <button className='btnClasse'  onClick={() => {choixSet('deplacer'); affichageFenetreSet('false');}}>Déplacer</button>
                                    {type === 'drapeau' ? (
                                        <>
                                            <button className='btnClasse' onClick={() => {choixSet('voir'); affichageFenetreSet('false');}}>Voir la base</button>
                                        </>
                                    ) : null }
                                    {type === 'drapeau' ? (
                                        <>
                                            {idBase !== 1 ? (
                                                <button className='btnClasse' onClick={() => {affichageFenetreSet('false'); detruireBase(idBase, storeBase);}}>Détruire cette base</button>
                                            ) : null }
                                        </>
                                    ) :
                                        <>
                                            <button className='btnClasse' onClick={() => {affichageFenetreSet('false'); fenetreUtiliserSet('true')}}>Utiliser</button>
                                            <button className='btnClasse' onClick={() => {affichageFenetreSet('false'); retirerMeuble(idBase, storeBase, id);}}>Détruire le meuble</button>
                                        </>
                                    }
                                </div>
                            </>
                        ) : null }
                    </>
                ) : null }

                {/* ========= FENETRE BASE ========= */}

                {choix === 'voir' ? (
                    <div className="fenetreBase">
                        <div className="haut">
                            <div className="nom">
                                {editionNom === 'false' ? (
                                    <>
                                        <div className='nomLigne' style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <p style={{fontWeight: '300'}}>Nom de la base : </p>
                                            <div style={{display: 'flex'}}>
                                                <p style={{fontWeight: '600', marginRight: '1vh'}}>{nomBase}</p>
                                                <button className=''  onClick={() => {editionNomSet('true');}}><span class="material-symbols-outlined">edit</span></button>
                                            </div>
                                        </div>
                                        <div className='nomLigne' style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <p style={{fontWeight: '300'}}>Protection : </p>
                                            <p style={{fontWeight: '600', marginRight: '1vh'}}>{protection}</p>
                                        </div>
                                        <div className='nomLigne' style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <p style={{fontWeight: '300'}}>Piege : </p>
                                            <p style={{fontWeight: '600', marginRight: '1vh'}}>{piege}</p>
                                        </div>
                                    </>
                                ) :
                                    <div className='editionNom'>
                                        <input type="text" value={nomBase} onChange={(event) => {nomBaseSet(event.target.value);}} />
                                        <button className='' onClick={() => {editionNomSet('false');}}><span class="material-symbols-outlined">close</span></button>
                                        <button className='' onClick={() => {editionNomSet('false'); storeBase.modifierChampsBase(idBase, 'nom', nomBase)}}><span class="material-symbols-outlined">done</span></button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="bas">
                            <button className='btnClasse'  onClick={() => {choixSet(''); affichageFenetreSet('false');}}>Fermer</button>
                        </div>
                    </div>
                ) : null }
                {fenetreUtiliser === 'true' ? (
                    <>
                        {type === 'tente' ? (
                            <>
                                <Dormir idBase={idBase} />
                                <button className='btnClasse fermerUtiliser' onClick={() => {fenetreUtiliserSet('false');}}>Fermer</button>
                            </>
                        ) : null }
                    </>
                ) : null }
            </div>
        </div>
    )
}

export default Meuble