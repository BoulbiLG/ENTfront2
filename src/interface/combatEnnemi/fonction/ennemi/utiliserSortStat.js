
export const utiliserSortStat = (storeCombat, storeEnnemis, storeJoueurs=[], sort, type, historique, historiqueSet, storeEnnemisTout) => {

    if (sort) {

        if (type == 'augmente') {

            if (sort.type == 'augmenteStat') {

                // AJOUTE LIGNE EFFET
                const ligne = {
                    type: 'augmenteStat',
                    id: sort.id, 
                    consequence: sort.consequence, 
                    cible: storeEnnemis.nom,
                    imgIcone: sort.imgIcone,
                    tour: sort.tour,
                };

                storeCombat.ajouterTableau('effetTemporaire', ligne);

                // APPLIQUE EFFET
                sort.consequence.forEach((joueur) => {
                    const stat = storeEnnemis[joueur.stat];
                    storeEnnemisTout.modifierChampsEnnemi(storeEnnemis.id, joueur.stat, parseInt(stat * joueur.action));
                    storeEnnemisTout.retirerChampsEnnemi(storeEnnemis.id, 'magie', sort.cout);

                    const ligne2 = {
                        icone: storeEnnemis.imgIcone,
                        couleurFond: 'rgb(225, 107, 107)',
                        couleurPolice: 'white',
                        texte: `${storeEnnemis.nom} utilise le sort ${sort.nom} et voit sa ${[joueur.stat]} initale de : ${stat} augmenté à ${parseInt(stat * joueur.action)}`,
                        resume: `${storeEnnemis.nom} + ${sort.nom} => ${[joueur.stat]}: ${stat} >> ${parseInt(stat * joueur.action)}`,
                    }

                    storeCombat.ajouterTableau('historiqueAction', ligne2);
                });

                return 'passer';
            }
        }

        if (type == 'baisse') {

            if (sort.type == 'baisseStat') {

                // AJOUTE LIGNE EFFET
                const ligne = {
                    type: 'baisseStat',
                    id: sort.id, 
                    cible: storeJoueurs.nom, 
                    consequence: sort.consequence, 
                    lanceur: storeEnnemis.nom,
                    imgIcone: sort.imgIcone,
                    tour: sort.tour,
                };

                storeCombat.ajouterTableau('effetTemporaire', ligne);

                // APPLIQUE EFFET
                sort.consequence.forEach((joueur) => {
                    const stat = storeJoueurs[joueur.stat];
                    storeJoueurs.modifier(joueur.stat, parseInt(stat / joueur.action));
                    storeEnnemisTout.retirerChampsEnnemi(storeEnnemis.id, 'magie', sort.cout);

                    const ligne2 = {
                        icone: storeEnnemis.imgIcone,
                        couleurFond: 'rgb(225, 107, 107)',
                        couleurPolice: 'white',
                        texte: `${storeEnnemis.nom} utilise le sort ${sort.nom}. ${storeJoueurs.nom} voit sa ${[joueur.stat]}: ${stat} réduite à ${parseInt(stat / joueur.action)}`,
                        resume: `${storeEnnemis.nom} + ${sort.nom} => ${storeJoueurs.nom} ${[joueur.stat]}: ${stat} >> ${parseInt(stat / joueur.action)}`,
                    }

                    storeCombat.ajouterTableau('historiqueAction', ligne2);
                });

                return 'passer';
            }
        }

        if (type == 'status') {

            if (sort.type == 'status') {

                // APPLIQUE EFFET
                storeJoueurs.modifier('status', sort.status.status);
                storeEnnemisTout.retirerChampsEnnemi(storeEnnemis.id, 'magie', sort.cout);

                const ligne2 = {
                    icone: storeEnnemis.imgIcone,
                    couleurFond: 'rgb(225, 107, 107)',
                    couleurPolice: 'white',
                    texte: `${storeEnnemis.nom} utilise le sort ${sort.nom}. ${storeJoueurs.nom} est victime de ${sort.status.status}`,
                    resume: `${storeEnnemis.nom} => ${sort.nom}. ${storeJoueurs.nom}: ${sort.status.status}`,
                }

                storeCombat.ajouterTableau('historiqueAction', ligne2);

                return 'passer';
            }
        }
    }
}