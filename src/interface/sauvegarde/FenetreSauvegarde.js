import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './fenetreSauvegarde.css';

import musiqueStore from '../../variableGlobal/audio/musiqueStore';
import baseStore from '../../variableGlobal/base/baseStore';
import ennemiStore from '../../variableGlobal/ennemi/ennemiStore';
import colisionStore from '../../variableGlobal/global/colision/onche';
import cinematiqueStore from '../../variableGlobal/global/cinematiqueStore';
import combatStore from '../../variableGlobal/global/combatStore';
import deplacementStore from '../../variableGlobal/global/deplacementStore';
import miniMapStore from '../../variableGlobal/global/miniMap';
import parametreStore from '../../variableGlobal/global/parametreStore';
import inventaireStore from '../../variableGlobal/inventaire/inventaireStore';
import AsterixStore from '../../variableGlobal/personnage/AsterixStore';
import BlondinStore from '../../variableGlobal/personnage/BlondinStore';
import CelestinStore from '../../variableGlobal/personnage/CelestinStore';
import ChevalierMauditStore from '../../variableGlobal/personnage/ChevalierMaudit';
import CleaMoletteStore from '../../variableGlobal/personnage/CleaMoletteStore';
import equipeStore from '../../variableGlobal/personnage/equipeStore';
import FranckDuboscStore from '../../variableGlobal/personnage/FranckDuboscStore';
import Jouhn_ingroumStrore from '../../variableGlobal/personnage/JouhnStore';
import LeobenStore from '../../variableGlobal/personnage/LeobenStore';
import MothStore from '../../variableGlobal/personnage/MothStore';
import ObelixStore from '../../variableGlobal/personnage/ObelixStore';
import SneakyStore from '../../variableGlobal/personnage/SneakyStore';
import VolutesStore from '../../variableGlobal/personnage/VolutesStore';
import ZosteraeStore from '../../variableGlobal/personnage/ZosteraeStore';
import foretENTStore from '../../variableGlobal/stockage/foretENTStore';
import oncheStore from '../../variableGlobal/stockage/oncheStore';

const FenetreSauvegarde = () => {

    const UrlOnline = 'https://mondedesentsback.onrender.com';
    const UrlLocal = 'http://localhost:5000';

    const musique = musiqueStore();
    const base = baseStore();
    const ennemi = ennemiStore();
    const onche = colisionStore();
    //const cinematique = cinematiqueStore();
    //const combat = combatStore();
    const deplacement = deplacementStore();
    const miniMap = miniMapStore();
    const parametre = parametreStore();
    const inventaire = inventaireStore();
    const asterix = AsterixStore();
    const blondin = BlondinStore();
    const celestin = CelestinStore();
    const chevalierMaudit = ChevalierMauditStore();
    const cleamolette = CleaMoletteStore();
    const equipe = equipeStore();
    const franckDubosc = FranckDuboscStore();
    const jouhn_ingroum = Jouhn_ingroumStrore();
    const leoben = LeobenStore();
    const moth = MothStore();
    const obelix = ObelixStore();
    const sneaky = SneakyStore();
    const volutes = VolutesStore();
    const zosterae = ZosteraeStore();
    const foretENTstockage = foretENTStore();
    const oncheStockage = oncheStore();

    const nomPartie = sessionStorage.getItem('partieEnCours');
    const pseudo = sessionStorage.getItem('pseudo');

    const sauvegarder = async () => {
        /*
        const tableauSauvegarde = {
            musique: musique,
            base: base,
            ennemi: ennemi,
            onche: onche,
            cinematique: cinematique,
            combat: combat,
            deplacement: deplacement,
            miniMap: miniMap,
            parametre: parametre,
            inventaire: inventaire,
            asterix: asterix,
            
        };
        */
        const tableauDivers1 = {
            musique: musique,
            deplacement: deplacement,
            base: base,
            ennemi: ennemi,
            miniMap: miniMap,
            parametre: parametre,
            pseudo: pseudo,
            nomPartie: nomPartie,
        };
        try {
            await axios.post(`${UrlLocal}/compte/sauvegarder`, tableauDivers1);
            console.log('Données envoyées avec succès!');
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à l\'API:', error);
        }
    }
    
    return (
        <div className='FenetreSauvegarde'>
            <p>Votre pseudo : {pseudo}</p>
            <p>Partie courante : {nomPartie}</p>
            <br />
            <hr />
            <br />
            <button className='boutonBasique' onClick={() => {
                sauvegarder();
            }}>Sauvegarder et quitter</button>
        </div>
    )
}

export default FenetreSauvegarde