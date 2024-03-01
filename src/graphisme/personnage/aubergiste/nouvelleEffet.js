export const nouvelleEffet = () => {

    const nombre = Math.floor(Math.random() * 50) + 1;

    let reponse;

    if (nombre == 1) {reponse = "J'ai entendu dire qu'une horde de jeune homme se promenait dans les cimetières la nuit...";}
    else if (nombre == 10) {reponse = "L'autre jour un curieux bonhomme  rose m'a parlé d'un mystérieux lexique.";}
    else {reponse = "Rien pour le moment, tout roule visiblement."}

    return reponse;
}