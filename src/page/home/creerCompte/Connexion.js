import React, { useState } from 'react';

const Connexion = () => {

    const [pseudo, pseudoSet] = useState('');
    const [mdp, mdpSet] = useState('');

    const seConnecter = async (pseudo, mdp) => {
        try {
            const response = await fetch('http://localhost:1234/connexion', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ pseudo, mdp }),
            });
      
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error('Error:', error);
          }
    }

    return (
        <div className='Connexion'>
            <input type="text" placeholder='Votre pseudo' value={pseudo} onChange={(event) => {pseudoSet(event.target.value)}} />
            <input type="text" placeholder='Votre mot de passe' value={mdp} onChange={(event) => {mdpSet(event.target.value)}} />
            <button onClick={() => {seConnecter(pseudo, mdp)}}>Se connecter</button>
        </div>
    )
}

export default Connexion;
