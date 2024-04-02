
export const utiliserSortStat = (storeCombat, storeEnnemis, storeJoueurs=[], sort, type, historique, historiqueSet) => {

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
                    storeEnnemis.modifier(joueur.stat, stat * joueur.action);
                    storeEnnemis.retirer('magie', sort.cout);
                    //console.log(stat, ' * par ', joueur.action, ' = ', parseInt(stat * joueur.action));
                    //console.log(storeEnnemis.nom, ' voit sa ', [joueur.stat], ' initiale de : ', stat, ' augmenté a ', parseInt(stat * joueur.action));
                    
                    /*
                    historiqueSet([...historique, {
                        icone: storeEnnemis.imgIcone,
                        couleurFond: 'rgb(225, 107, 107)',
                        couleurPolice: 'white',
                        texte: `${storeEnnemis.nom} utilise le sort ${sort.nom} et voit sa ${[joueur.stat]} initale de : ${stat} augmenté à ${parseInt(stat * joueur.action)}`,
                        resume: `${storeEnnemis.nom} + ${sort.nom} => ${[joueur.stat]}: ${stat} >> ${parseInt(stat * joueur.action)}`,
                    }]);
                    */

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
                    storeJoueurs.modifier(joueur.stat, stat / joueur.action);
                    storeEnnemis.retirer('magie', sort.cout);
                    //console.log(stat, ' / par ', joueur.action, ' = ', parseInt(stat / joueur.action));
                    //console.log(storeJoueurs.nom, ' voit sa ', [joueur.stat], ' initiale de : ', stat,  ' reduite a ', parseInt(stat / joueur.action));

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
                storeEnnemis.retirer('magie', sort.cout);

                //console.log(storeJoueurs.nom, ' est victime de ', sort.status.status);

                /*
                historiqueSet([...historique, {
                    icone: storeEnnemis.imgIcone,
                    couleurFond: 'rgb(225, 107, 107)',
                    couleurPolice: 'white',
                    texte: `${storeEnnemis.nom} utilise le sort ${sort.nom}. ${storeJoueurs.nom} est victime de ${sort.status.status}`,
                    resume: `${storeEnnemis.nom} => ${sort.nom}. ${storeJoueurs.nom}: ${sort.status.status}`,
                }]);
                */

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