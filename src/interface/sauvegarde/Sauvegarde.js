import React, {useState} from 'react';

import '../../css/classe/btn.css';
import './sauvegarde.css';

import FenetreSauvegarde from './FenetreSauvegarde';

import fenetreStore from '../../variableGlobal/fenetre/fenetreStore';
import parametreStore from '../../variableGlobal/global/parametreStore';

import ouvertureFenetre from '../../audio/audio/ouvertureFenetre.mp3';

const Sauvegarde = () => {



    // ==================== DECLARATION VARIABLE / FONCTION ==================== //



    const [affichageFenetre, affichageFenetreSet] = useState('false');
    const storeFenetre = fenetreStore();
    const [indexFenetre, indexFenetreSet] = useState();

    const storeParametre = parametreStore();

    const ouvrirFenetre = () => {
        const index = storeFenetre.modifierCourante('stat');
        indexFenetreSet(index);
        affichageFenetreSet('true');
        const audio = new Audio(ouvertureFenetre);
        audio.volume = storeParametre.volumeBruitage / 100;
        audio.play();
    }

    const fermerFenetre = () => {
        affichageFenetreSet('false');
    }


        
    return (
        <div className='Stat' >



            {/* ==================== AFFICHAGE FENETRE ==================== */}



            {affichageFenetre === 'false' ? (
                <div className='affichageFenetre btnClasseDiv' style={{width: '23vh',}} onClick={() => {ouvrirFenetre()}} >
                    <span class="material-symbols-outlined">save</span>
                    <p>Sauvegarder</p>
                </div>
            ) :
                <>
                    <div className='affichageFenetre btnClasseDiv' style={{width: '23vh',}} onClick={() => {fermerFenetre()}} >
                        <span class="material-symbols-outlined">save</span>
                        <p>Ne pas sauvegarder</p>
                    </div>
                    <FenetreSauvegarde indexFenetre={indexFenetre} />
                </>
            }



        </div>
    )
}

export default Sauvegarde