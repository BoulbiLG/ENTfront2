export const verificationDialogue = (nom, id, type, consequence, dialogueAffichageSet, storePersonnage) => {

    storePersonnage.ajouter('compteurReplique', 1);
    storePersonnage.ajouter('joie', 1);

    let repliqueReturn = 'Rien compris . . .';

    // incrementation

    for (const emotion in consequence) {

        const valeur = consequence[emotion];
        if (emotion == 'joie') {storePersonnage.ajouter('joie', valeur); if (storePersonnage.joie <= 0) {storePersonnage.modifier('joie', 0)}}
        if (emotion == 'colere') {storePersonnage.ajouter('colere', valeur); if (storePersonnage.colere <= 0) {storePersonnage.modifier('colere', 0)}}
        if (emotion == 'tristesse') {storePersonnage.ajouter('tristesse', valeur); if (storePersonnage.tristesse <= 0) {storePersonnage.modifier('tristesse', 0)}}
        if (emotion == 'peur') {storePersonnage.ajouter('peur', valeur); if (storePersonnage.peur <= 0) {storePersonnage.modifier('peur', 0)}}
        if (emotion == 'confiance') {storePersonnage.ajouter('confiance', valeur); if (storePersonnage.confiance <= 0) {storePersonnage.modifier('confiance', 0)}}
        if (emotion == 'empathie') {storePersonnage.ajouter('empathie', valeur); if (storePersonnage.empathie <= 0) {storePersonnage.modifier('empathie', 0)}}

        console.log('Emotion:', emotion, 'Valeur:', valeur);

    }

    storePersonnage.ajouterQuestion(id)

    // gestion dialogue

    if (type == 'colere') {
        if(storePersonnage.colere >= 0 && storePersonnage.colere <= 20) {repliqueReturn = storePersonnage.replique.colere.r1;}
        if(storePersonnage.colere >= 20 && storePersonnage.colere <= 40) {repliqueReturn = storePersonnage.replique.colere.r2;}
        if(storePersonnage.colere >= 40 && storePersonnage.colere <= 60) {repliqueReturn = storePersonnage.replique.colere.r3;}
        if(storePersonnage.colere >= 60 && storePersonnage.colere <= 80) {repliqueReturn = storePersonnage.replique.colere.r4;}
        if(storePersonnage.colere >= 80) {repliqueReturn = storePersonnage.replique.colere.r5;}
    }

    if (type == 'confiance') {
        if(storePersonnage.confiance >= 0 && storePersonnage.confiance <= 30) {repliqueReturn = storePersonnage.replique.confiance.r1;}
        if(storePersonnage.confiance >= 30 && storePersonnage.confiance <= 60) {repliqueReturn = storePersonnage.replique.confiance.r2;}
        if(storePersonnage.confiance >= 60) {repliqueReturn = storePersonnage.replique.confiance.r3;}
    }

    if (type == 'joie') {repliqueReturn = storePersonnage.replique.joie;}
    if (type == 'tristesse') {repliqueReturn = storePersonnage.replique.tristesse;}
    if (type == 'empathie') {repliqueReturn = storePersonnage.replique.empathie;}
    if (type == 'peur') {repliqueReturn = storePersonnage.replique.peur;}

    if (type == 'don') {repliqueReturn = 'Vraiment ?'}

    dialogueAffichageSet(repliqueReturn);

}