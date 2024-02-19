import React from 'react';
import { Link } from 'react-router-dom';

const CreerCompte = () => {
        
    return (
        <div className='CreerCompte'>
            <div className="connexion">
                <Link to="/connexion">Se connecter</Link>
            </div>
            <div className="inscription">
                <Link to="/inscriptio">S'inscrire</Link>
            </div>
        </div>
    )
}

export default CreerCompte