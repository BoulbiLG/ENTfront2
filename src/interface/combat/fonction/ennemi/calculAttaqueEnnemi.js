
import { lexiqueBadge } from "../../../../variableGlobal/item/badge/lexiqueBadge";

export const calculAttaqueEnnemi = (storeEnnemis, action, actionArme) => {

    let attaque = storeEnnemis.attaque;
    if (action) {
        attaque = storeEnnemis.attaque + action;
    }

    const courage = storeEnnemis.courage;
    const niveau = storeEnnemis.niveau;
    const testo = storeEnnemis.testo;

    const joie = storeEnnemis.joie;
    const tristesse = storeEnnemis.tristesse;
    const peur = storeEnnemis.peur;
    const colere = storeEnnemis.colere;

    //  CALCUL ATTAQUE STAT
    var tauxNiveau = niveau / 10 + 1;
    var tauxColere = colere / 10 + 1;
    var tauxTesto = (testo / 10) * tauxColere + 1;

    //console.log('tauxColere : ', tauxColere);
    //console.log('tauxTesto : ', tauxTesto);
    //console.log('tauxNiveau : ', tauxNiveau);
    var attaqueStat = (attaque * tauxNiveau) * tauxTesto;

    //console.log(storeEnnemis.nom, 'attaqueStat : ', attaqueStat);

    //console.log('Attaque stat : ', attaqueStat);

    // PROBABILITE COUP CRITIQUE
    const randomValue = Math.random();
    if (randomValue < 1 / courage) {
        attaqueStat = attaqueStat * 2;
        //console.log(storeEnnemis.nom, 'Attaque apres probabilité : ', attaqueStat);
    }

    //CALCUL ATTAQUE NET
    var attaqueHumeur;
    var tauxJoie;
    var tauxTristesse;
    var tauxPeur;

    if (joie > 0) {tauxJoie = joie / 10 + 1;} else {tauxJoie = 0;}
    if (tristesse > 0) {tauxTristesse = tristesse / 10 + 1;} else {tauxTristesse = 0;}
    if (peur > 0) {tauxPeur = peur / 10 + 1;} else {tauxPeur = 0;}

    let attaqueJoie = 0;
    let attaquePeur = 0;
    let attaqueTristesse = 0;

    if (tauxJoie > 0) {attaqueJoie = attaqueStat * tauxJoie;}
    if (tauxTristesse > 0) {attaqueTristesse = attaqueStat / tauxTristesse;}
    if (tauxPeur > 0) {attaquePeur = attaqueStat / tauxPeur;}

    attaqueHumeur = parseInt((attaqueJoie + attaqueTristesse + attaquePeur) / 3);

    //console.log(storeEnnemis.nom, 'attaqueHumeur : ', attaqueHumeur);

    // VERIFICATION BADGE
    for (let i = 0; i < storeEnnemis.badge; i++) {
        const badge = storeEnnemis.badge[i];
        if (badge.id == 'chat') {
            attaqueHumeur = attaqueHumeur * lexiqueBadge.chat.consequence.action;
        }
    }

    return attaqueHumeur;
}