import React from 'react';

import '../../css/classe/fenetre1.css'
import './lieux.css';

const Lieux = ({ lieux }) => {



    return (
        <div className='Lieux fenetre1Classe'>
            <p>{lieux}</p>
        </div>
    )
}

export default Lieux