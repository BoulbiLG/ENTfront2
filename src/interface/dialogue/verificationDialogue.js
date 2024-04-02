
export const verificationDialogue = async (nom, id, type, consequence, dialogueAffichageSet, storePersonnage, equipeStore, storeRefresh, contexte='', storeCelestin=[], storeCombat=[], storeMusique=[], etatSet) => {
    
    let repliqueReturn = [];

    // incrementation

    for (const emotion in consequence) {

        const valeur = consequence[emotion];
        if (emotion === 'joie') {storePersonnage.ajouter('joie', valeur); if (storePersonnage.joie < 0) {storePersonnage.modifier('joie', 0)}}
        if (emotion === 'colere') {storePersonnage.ajouter('colere', valeur); if (storePersonnage.colere < 0) {storePersonnage.modifier('colere', 0)}}
        if (emotion === 'tristesse') {storePersonnage.ajouter('tristesse', valeur); if (storePersonnage.tristesse < 0) {storePersonnage.modifier('tristesse', 0)}}
        if (emotion === 'peur') {storePersonnage.ajouter('peur', valeur); if (storePersonnage.peur < 0) {storePersonnage.modifier('peur', 0)}}
        if (emotion === 'confiance') {storePersonnage.ajouter('confiance', valeur); if (storePersonnage.confiance < 0) {storePersonnage.modifier('confiance', 0)}}
        if (emotion === 'empathie') {storePersonnage.ajouter('empathie', valeur); if (storePersonnage.empathie < 0) {storePersonnage.modifier('empathie', 0)}}

    }

    if (storePersonnage.nom !== 'Celestin') {
        storePersonnage.ajouterQuestion(id);
    }

    // gestion dialogue

    if (type === 'colere') {
        if(storePersonnage.colere >= 0 && storePersonnage.colere <= 80) {repliqueReturn.push(storePersonnage.dialogue.replique.colere);}
        if(storePersonnage.colere >= 80) {repliqueReturn.push(storePersonnage.dialogue.replique.combat);}
    }

    if (type === 'confiance') {
        if(storePersonnage.confiance >= 0 && storePersonnage.confiance <= 60) {repliqueReturn.push(storePersonnage.dialogue.replique.confiance);}
        if(storePersonnage.confiance >= 90) {repliqueReturn.push(storePersonnage.dialogue.replique.confiance);}
    }

    if (type === 'joie') {repliqueReturn.push(storePersonnage.dialogue.replique.joie);}
    if (type === 'tristesse') {repliqueReturn.push(storePersonnage.dialogue.replique.tristesse);}
    if (type === 'empathie') {repliqueReturn.push(storePersonnage.dialogue.replique.empathie);}
    if (type === 'peur') {repliqueReturn.push(storePersonnage.dialogue.replique.peur);}

    if (type === 'don') {repliqueReturn.push({texte: 'Vraiment ?', sticker: 'https://image.noelshack.com/fichiers/2019/19/4/1557437332-ace383ce-418a-47f9-91b0-a862161adaac.jpeg'});}


    // recruter


    if (type === 'recruter') {
        if (storePersonnage.confiance >= 100 || (storePersonnage.etat === 'equipier' && storePersonnage.soumis === 'oui')) {
            if (storePersonnage.nom === 'Souritima') {

            } else {
                storePersonnage.modifier('zoneZ', 99999999999);
                storePersonnage.modifier('soumis', 'oui');
                storePersonnage.modifier('etat', 'equipier');

                equipeStore.ajouterNom(storePersonnage.nom);
                storeRefresh.ajouter('refresh', 1);

                repliqueReturn.push({texte: 'Ok ça marche !', sticker: 'https://image.noelshack.com/fichiers/2018/10/4/1520520305-pupute-cr7.png'});
            }
        } else {
            repliqueReturn.push({texte: 'Ptdr t ki ?', sticker: 'https://image.noelshack.com/fichiers/2020/50/2/1607386908-enxt.png'});
        }
    }


    // baiser


    if (type === 'baiser') {
        if (storePersonnage.empathie >= 100) {
            if (storePersonnage.nom === 'Souritima') {

            } else {
                storeCelestin.ajouter('bodycount', 1);
                storeCelestin.ajouterAmoureuse(storePersonnage.nom);

                repliqueReturn.push({texte: '. . .', sticker: 'https://image.noelshack.com/fichiers/2017/01/1483717744-dobrev.jpg'});
            }
        } else {
            repliqueReturn.push({texte: 'Mais ça va pas !', sticker: 'https://image.noelshack.com/fichiers/2017/34/4/1503596404-danykj.png'});
        }
    }

    if (type === 'blondin') {
        const enculerPromise = new Promise((resolve) => {
            repliqueReturn.push({texte: "J'vais t'enculer", sticker: 'https://image.noelshack.com/fichiers/2017/08/1488117914-clint.gif'});
            storeMusique.modifier('courante', 'combatNormal');
            storeMusique.modifier('lecture', 0);
            storeMusique.ajouter('nombreEnnemi', 1);
            storeMusique.modifier('type', 'normal');
            dialogueAffichageSet(repliqueReturn);
            setTimeout(() => {
                storeCombat.modifier('combat', 'oui');
                storeCombat.modifier('lieuPrecedent', 'onche');
                storeCombat.ajouterNom('Blondin');
                //storeCombat.ajouterNom('CleaMolette');
                //storeCombat.ajouterNom('ChevalierMaudit');
                //storeCombat.modifierTableau('ennemiEnVie', ['Blondin', 'CleaMolette', 'ChevalierMaudit']);
                //storeCombat.modifierTableau('ennemiEnVie', ['CleaMolette']);
                storeCombat.modifierTableau('ennemiEnVie', ['Blondin']);
                etatSet('fixe');
                resolve();
            }, 2000);
        });
    
        await enculerPromise;
    }

    if (contexte !== 'stat') {
        dialogueAffichageSet(repliqueReturn);
    }

}