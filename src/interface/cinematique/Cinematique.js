import React, { useEffect, useState } from 'react';
import './cinematique.css';
import cinematiqueStore from '../../variableGlobal/global/cinematiqueStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';
import deplacementStore from '../../variableGlobal/global/deplacementStore';
import equipeStore from '../../variableGlobal/personnage/equipeStore';
import parametreStore from '../../variableGlobal/global/parametreStore';
import musiqueStore from '../../variableGlobal/audio/musiqueStore';
import BenzemonstreStore from '../../variableGlobal/personnage/JouhnStore'

const Cinematique = () => {
    const [cinematiqueCourante, setCinematiqueCourante] = useState('');

    const storeCelestin = CelestinStore();
    const storeEquipe = equipeStore();
    const storeCinematique = cinematiqueStore();
    const storeMusique = musiqueStore();
    const storeDeplacement = deplacementStore();
    const storeParametre = parametreStore();
    const storeJouhn = BenzemonstreStore();
    const { cinematique } = cinematiqueStore();

    useEffect(() => {

        if (storeCelestin.information.premiereCinematique === 'non') {
            storeCinematique.modifier('cinematique', 'oui');
            storeCinematique.modifier('courant', 'intro');
        }

        if (storeCinematique.courant === 'intro') {
            setCinematiqueCourante('lz2omsaPcp8');
            storeParametre.modifier('volumeMusique', 1);
        }
        if (storeCinematique.courant === 'goulag') {
            setCinematiqueCourante('gCVbLYlpDXk');
            storeParametre.modifier('volumeMusique', 1);
        }

        if (storeCinematique.courant === '') {
            setCinematiqueCourante('');
        }

    }, [cinematique, storeCelestin, storeCinematique.courant]);

    const verificationCinematique = () => {
        if (storeCelestin.information.premiereCinematique === 'non') {
            storeCelestin.modifierInformation('premiereCinematique', 'oui');
            storeMusique.modifier('courante', 'onche');
            storeParametre.modifier('volumeMusique', 100);
        }

        if (storeCinematique.courant === 'goulag') {
            storeDeplacement.modifier('zoneX', -2);
            storeDeplacement.modifier('zoneY', -5);
            storeDeplacement.modifier('zoneZ', 0);
            storeDeplacement.ajouter('miniMapX', 40);
            storeDeplacement.ajouter('miniMapY', 100);
            storeEquipe.ajouterNom('Jouhn_ingroum');
            storeJouhn.modifier('soumis', 'oui');
            storeJouhn.modifier('etat', 'equipier');
            storeMusique.modifier('courante', 'onche');
            storeParametre.modifier('volumeMusique', 100);
        }
    }

    return (
        <>
            {cinematique === 'oui' && (
                <div className='Cinematique'>
                    <iframe
                    width="1280"
                    height="720"
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
                        verificationCinematique();
                        setCinematiqueCourante('');
                    }}>Fermer</button>
                </div>
            )}
        </>
    );
}

export default Cinematique;
