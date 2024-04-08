import React, { useEffect, useState } from 'react';
import './cinematique.css';
import cinematiqueStore from '../../variableGlobal/global/cinematiqueStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';

const Cinematique = () => {
    const [cinematiqueCourante, setCinematiqueCourante] = useState('');

    const storeCelestin = CelestinStore();
    const storeCinematique = cinematiqueStore();
    const { cinematique } = cinematiqueStore();

    useEffect(() => {
        console.log('cinematique verification');

        if (storeCelestin.information.premiereCinematique === 'non') {
            storeCinematique.modifier('cinematique', 'oui');
            storeCinematique.modifier('courant', 'intro');
        }

        if (storeCinematique.courant === 'intro') {
            setCinematiqueCourante('lz2omsaPcp8');
        }

        if (storeCinematique.courant === '') {
            setCinematiqueCourante('');
        }

    }, [cinematique, storeCelestin]);

    const verificationPremiereCinematique = () => {
        if (storeCelestin.information.premiereCinematique === 'non') {
            storeCelestin.modifierInformation('premiereCinematique', 'oui');
        }
    }

    return (
        <>
            {cinematique === 'oui' && (
                <div className='Cinematique'>
                    <iframe
                    width="1920"
                    height="1080"
                    src={`https://www.youtube.com/embed/${cinematiqueCourante}?si=wmMbh-ryC-nOKpWS&autoplay=1&controls=0`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    ></iframe>

                    <button onClick={() => {
                        storeCinematique.modifier('cinematique', 'non');
                        storeCinematique.modifier('courant', '');
                        verificationPremiereCinematique();
                        setCinematiqueCourante('');
                    }}>Fermer</button>
                </div>
            )}
        </>
    );
}

export default Cinematique;
