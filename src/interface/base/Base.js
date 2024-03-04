import React, {useState} from 'react';

import '../../css/classe/btn.css';
import './base.css';

import FenetreBase from './FenetreBase';

import parametreStore from '../../variableGlobal/global/parametreStore';

import ouvertureFenetre from '../../audio/audio/ouvertureFenetre.mp3';

const Base = () => {



    // ==================== DECLARATION VARIABLE / FONCTION ==================== //



    const [affichageFenetre, affichageFenetreSet] = useState('false');
    const [indexFenetre, indexFenetreSet] = useState();

    const storeParametre = parametreStore();


        
    return (
        <div className='Base' >



            {/* ==================== AFFICHAGE FENETRE ==================== */}



            {affichageFenetre === 'false' ? (
                <div className='affichageFenetre btnClasseDiv' style={{width: '23vh',}} onClick={() => {affichageFenetreSet('true');const audio = new Audio(ouvertureFenetre);audio.volume = storeParametre.volumeBruitage / 100;audio.play();}} >
                    <span class="material-symbols-outlined">countertops</span>
                    <p>Ouvir les meubles</p>
                </div>
            ) :
                <>
                    <div className='affichageFenetre btnClasseDiv' style={{width: '23vh',}} onClick={() => {affichageFenetreSet('false');}} >
                        <span class="material-symbols-outlined">countertops</span>
                        <p>Fermer les meubles</p>
                    </div>
                    <FenetreBase indexFenetre={indexFenetre} />
                </>
            }



        </div>
    )
}

export default   Base