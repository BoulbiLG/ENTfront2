import React, {useState} from 'react';

import '../../css/classe/btn.css';
import './parametre.css';

import FenetreParametre from './FenetreParametre';

const Parametre = () => {



    // ==================== DECLARATION VARIABLE / FONCTION ==================== //



    const [affichageFenetre, affichageFenetreSet] = useState('false');
    const [indexFenetre, indexFenetreSet] = useState();

    const ouvrirInventaire = () => {
        affichageFenetreSet('true');
    }

    const fermerInventaire = () => {
        affichageFenetreSet('false');
    }


        
    return (
        <div className='Parametre' >



            {/* ==================== AFFICHAGE FENETRE ==================== */}



            {affichageFenetre === 'false' ? (
                <div className='affichageFenetre btnClasseDiv' style={{width: '23vh',}} onClick={() => {ouvrirInventaire()}} >
                    <span class="material-symbols-outlined">settings</span>
                    <p>Ouvir paramètres</p>
                </div>
            ) :
                <>
                    <div className='affichageFenetre btnClasseDiv' style={{width: '23vh',}} onClick={() => {fermerInventaire()}} >
                        <span class="material-symbols-outlined">settings</span>
                        <p>Fermer paramètres</p>
                    </div>
                    <FenetreParametre indexFenetre={indexFenetre} />
                </>
            }

        </div>
    )
}

export default Parametre