import React, {useState} from 'react';

import './stat.css';
import '../../css/classe/btn.css';

import FenetreStat from './FenetreStat';

import fenetreStore from '../../variableGlobal/fenetre/fenetreStore';

const Stat = () => {



    // ==================== DECLARATION VARIABLE / FONCTION ==================== //



    const [affichageFenetre, affichageFenetreSet] = useState('false');
    const storeFenetre = fenetreStore();
    const [indexFenetre, indexFenetreSet] = useState();

    const ouvrirFenetre = () => {
        const index = storeFenetre.modifierCourante('stat');
        indexFenetreSet(index);
        affichageFenetreSet('true');
        console.log(storeFenetre.courante);
    }

    const fermerFenetre = () => {
        affichageFenetreSet('false');
        console.log(storeFenetre.courante);
    }


        
    return (
        <div className='Stat' >



            {/* ==================== AFFICHAGE FENETRE ==================== */}



            {affichageFenetre === 'false' ? (
                <div className='affichageFenetre btnClasseDiv' onClick={() => {ouvrirFenetre()}} >
                    <span class="material-symbols-outlined">bar_chart</span>
                    <p>Ouvir les statistiques</p>
                </div>
            ) :
                <>
                    <div className='affichageFenetre btnClasseDiv' onClick={() => {fermerFenetre()}} >
                        <span class="material-symbols-outlined">bar_chart</span>
                        <p>Fermer les statistiques</p>
                    </div>
                    <FenetreStat indexFenetre={indexFenetre} />
                </>
            }



        </div>
    )
}

export default Stat