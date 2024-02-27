
export const verificationDialogue = (nom, id, type, consequence, dialogueAffichageSet, storePersonnage, equipeStore, storeRefresh, contexte='') => {
    
    let repliqueReturn = [];

    // incrementation

    for (const emotion in consequence) {

        const valeur = consequence[emotion];
        console.log(emotion);
        if (emotion == 'joie') {storePersonnage.ajouter('joie', valeur); if (storePersonnage.joie < 0) {storePersonnage.modifier('joie', 0)}}
        if (emotion == 'colere') {storePersonnage.ajouter('colere', valeur); if (storePersonnage.colere < 0) {storePersonnage.modifier('colere', 0)}}
        if (emotion == 'tristesse') {storePersonnage.ajouter('tristesse', valeur); if (storePersonnage.tristesse < 0) {storePersonnage.modifier('tristesse', 0)}}
        if (emotion == 'peur') {storePersonnage.ajouter('peur', valeur); if (storePersonnage.peur < 0) {storePersonnage.modifier('peur', 0)}}
        if (emotion == 'confiance') {storePersonnage.ajouter('confiance', valeur); if (storePersonnage.confiance < 0) {storePersonnage.modifier('confiance', 0)}}
        if (emotion == 'empathie') {storePersonnage.ajouter('empathie', valeur); if (storePersonnage.empathie < 0) {storePersonnage.modifier('empathie', 0)}}

        console.log('Emotion:', emotion, 'Valeur:', valeur);

    }

    if (storePersonnage.nom !== 'Celestin') {
        storePersonnage.ajouterQuestion(id);
    }

    // gestion dialogue

    if (type == 'colere') {
        if(storePersonnage.colere >= 0 && storePersonnage.colere <= 80) {repliqueReturn.push(storePersonnage.dialogue.replique.colere);}
        if(storePersonnage.colere >= 80) {repliqueReturn.push(storePersonnage.dialogue.replique.combat);}
    }

    if (type == 'confiance') {
        if(storePersonnage.confiance >= 0 && storePersonnage.confiance <= 60) {repliqueReturn.push(storePersonnage.dialogue.replique.confiance);}
        if(storePersonnage.confiance >= 90) {repliqueReturn.push(storePersonnage.dialogue.replique.confiance);}
    }

    if (type == 'joie') {repliqueReturn.push(storePersonnage.dialogue.replique.joie);}
    if (type == 'tristesse') {repliqueReturn.push(storePersonnage.dialogue.replique.tristesse);}
    if (type == 'empathie') {repliqueReturn.push(storePersonnage.dialogue.replique.empathie);}
    if (type == 'peur') {repliqueReturn.push(storePersonnage.dialogue.replique.peur);}

    if (type == 'don') {repliqueReturn.push({texte: 'Vraiment ?', sticker: 'https://image.noelshack.com/fichiers/2019/19/4/1557437332-ace383ce-418a-47f9-91b0-a862161adaac.jpeg'});}

    console.log('storePersonnage.etat : ', storePersonnage.etat);
    console.log('storePersonnage.soumis : ', storePersonnage.soumis);

    if (type == 'recruter' && storePersonnage.confiance >= 100 || type == 'recruter' && storePersonnage.etat == 'equipier' && storePersonnage.soumis == 'oui') {
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

    if (contexte != 'stat') {
        console.log(repliqueReturn);

        dialogueAffichageSet(repliqueReturn);
    }

}