import React, { useState } from 'react';

import './marchand.css';

import normal from '../../../asset/personnage/juif/normal.png';

import FenetreLidl from './FenetreLidl';

import '../../../css/classe/clickable.css';

const Marchand = () => {

    const [affichageFenetre, affichageFenetreSet] = useState('false');

    return (
        <div className='clickable Marchand'>
            {affichageFenetre === 'false' ? (
                <img className='perso' src={normal} alt="personnage" onClick={() => {affichageFenetreSet('true')}}/>
            ) : null }
            {affichageFenetre === 'true' ? (
                <img className='perso' src={normal} alt="personnage" onClick={() => {affichageFenetreSet('false')}}/>
            ) : null }
            <div className="fenetre">
                {affichageFenetre === 'true' ? (
                    <FenetreLidl />
                ) : null }
            </div>
        </div>
    )
}

export default Marchand