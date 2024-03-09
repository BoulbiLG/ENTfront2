export const calculVitesse = (storeEnnemis, storeJoueurs, tourSet) => {

    let vitesseEnnemi = 0;
    let vitesseJoueur = 0;

    for (let i = 0; i < storeEnnemis.length; i++) {
        vitesseEnnemi = vitesseEnnemi + storeEnnemis[i].vitesse;
    }

    for (let i = 0; i < storeJoueurs.length; i++) {
        vitesseJoueur = vitesseJoueur + storeJoueurs[i].vitesse;
    }

    if (vitesseEnnemi > vitesseJoueur) {
        tourSet('ennemi(s)');
    } else if (vitesseEnnemi < vitesseJoueur) {
        tourSet('joueur');
    } else if (vitesseEnnemi == vitesseJoueur) {
        tourSet('joueur');
    }

}