
export const utiliserSortStat = (storeCombat, storeEnnemis, storeJoueurs=[], sort, type) => {

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

                return 'passer';
            }
        }
    }
}