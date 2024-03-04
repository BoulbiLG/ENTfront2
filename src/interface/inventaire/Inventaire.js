import React, {useState} from 'react';

import ouvertureFenetre from '../../audio/audio/ouvertureFenetre.mp3';

import '../../css/classe/btn.css';
import './inventaire.css';

import FenetreInventaire from './FenetreInventaire';

import fenetreStore from '../../variableGlobal/fenetre/fenetreStore';
import parametreStore from '../../variableGlobal/global/parametreStore';

const   Inventaire = () => {



    // ==================== DECLARATION VARIABLE / FONCTION ==================== //



    const [affichageFenetre, affichageFenetreSet] = useState('false');
    const storeFenetre = fenetreStore();
    const [indexFenetre, indexFenetreSet] = useState();

    const storeParametre = parametreStore();

    const ouvrirInventaire = () => {
        const index = storeFenetre.modifierCourante('inventaire');
        indexFenetreSet(index);
        affichageFenetreSet('true');
        const audio = new Audio(ouvertureFenetre);
        audio.volume = storeParametre.volumeBruitage / 100;
        audio.play();
    }

    const fermerInventaire = () => {
        affichageFenetreSet('false');
        const audio = new Audio(ouvertureFenetre);
        audio.volume = storeParametre.volumeBruitage / 100;
    }


        
    return (
        <div className='Inventaire' >



            {/* ==================== AFFICHAGE FENETRE ==================== */}



            {affichageFenetre === 'false' ? (
                <div className='affichageFenetre btnClasseDiv' style={{width: '23vh',}} onClick={() => {ouvrirInventaire()}} >
                    <span class="material-symbols-outlined">work</span>
                    <p>Ouvir l'inventaire</p>
                </div>
            ) :
                <>
                    <div className='affichageFenetre btnClasseDiv' style={{width: '23vh',}} onClick={() => {fermerInventaire()}} >
                        <span class="material-symbols-outlined">work</span>
                        <p>Fermer l'inventaire</p>
                    </div>
                    <FenetreInventaire indexFenetre={indexFenetre} />
                </>
            }



        </div>
    )
}

export default   Inventaire