import React, {useState} from 'react';

import '../../css/classe/btn.css';
import './base.css';

import FenetreBase from './FenetreBase';

const Base = () => {



    // ==================== DECLARATION VARIABLE / FONCTION ==================== //



    const [affichageFenetre, affichageFenetreSet] = useState('false');
    const [indexFenetre, indexFenetreSet] = useState();


        
    return (
        <div className='Base' >



            {/* ==================== AFFICHAGE FENETRE ==================== */}



            {affichageFenetre === 'false' ? (
                <div className='affichageFenetre btnClasseDiv' style={{width: '23vh',}} onClick={() => {affichageFenetreSet('true');}} >
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