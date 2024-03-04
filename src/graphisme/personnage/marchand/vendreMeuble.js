
import argent from '../../../audio/audio/argent.mp3';
import { lexiqueArmure } from "../../../variableGlobal/item/lexiqueArmure";

export const vendreMeuble = (type, prix, quantiteItem, storeCelestin, storeInventaire, storeJoueurs, itemCourant, quantite, dialogueSet, stickerSet, storeParametre) => {
    
    if (quantite != '6000000') {
        if (itemCourant.important != 'oui') {
            let compteurSupplement = 0;
            let prixReel = 0;

            // ==================== VERIFICATION REDUCTION ==================== //

            for (let i = 0; i < storeJoueurs.length; i++) {
                const store = storeJoueurs[i];
                
                for (let i = 0; i < store.equipement.length; i++) {
                    const equipement = store.equipement[i];
                    
                    if (equipement.id === 'kippa') {
                        compteurSupplement++;
                    }
                    
                }

            }

            // ==================== CALCUL PRIX ==================== //

            if (compteurSupplement > 0) {
                prixReel = (prix * (compteurSupplement / 10 + 1)) * quantite;
                const reduc = compteurSupplement / 10 + 1;
                const taux = parseFloat(20 * reduc);
                prixReel = (prix + ((taux * prix) / 100)) * quantite;

                if (compteurSupplement > 1) {
                    dialogueSet(`Je vois que plusieurs de tes membres font partie de la communauté que nous connaissons bien. J'augmente le prix à ${parseInt(prixReel)}€`);
                    stickerSet('https://image.noelshack.com/fichiers/2024/09/7/1709423388-pz.png');
                } else {
                    dialogueSet(`Je vois qu'un de tes membres font partie de la communauté que nous connaissons bien. J'augmente le prix à à ${parseInt(prixReel)}€`);
                    stickerSet('https://image.noelshack.com/fichiers/2024/09/7/1709423388-pz.png');
                }
            } else {
                prixReel = prix * quantite;
            }



            if (quantite <= quantiteItem) {
                storeCelestin.ajouter('argent', parseInt(prixReel));

                const audio = new Audio(argent);
                audio.volume = storeParametre.volumeBruitage / 100;
                audio.play();

                const ligneAajouter = storeInventaire.meubles.find((element) => element.type === type);
                    
                if (ligneAajouter.quantite > 1 * quantite) {
                    storeInventaire.retirerQuantiteMeuble(type, 'quantite', 1 * quantite);
                    storeInventaire.retirer('poidMeuble', itemCourant.poid * quantite);
                } else {
                    storeInventaire.retirerLigneMeuble(type);
                    storeInventaire.retirer('poidMeuble', itemCourant.poid * quantite);
                }

                if (compteurSupplement == 0) {
                    dialogueSet("Belle transaction pour un goy.");
                    stickerSet('https://image.noelshack.com/fichiers/2023/41/1/1696802442-b-bibi-toast-020115-1425553084-copie.png');
                }
            } else {
                dialogueSet("Tu veux me vendre plus que tu n'as ? Boufon va !");
                stickerSet('https://image.noelshack.com/fichiers/2022/44/6/1667662249-fdfsdf-removebg-preview.png');
            }
        } else {
            dialogueSet("Je ne peux pas acheter ça");
            stickerSet('https://image.noelshack.com/fichiers/2022/36/6/1662823634-1.png');
        }
    } else {

        const poidKippa = storeInventaire.poid + lexiqueArmure.kippa.poid;

        if (storeCelestin.kippaMillion == 'utilisable' && storeInventaire.poidMax >= poidKippa) {
            storeCelestin.modifier('kippaMillion', 'fini')

            const ligneAajouter = storeInventaire.inventaire.find((element) => element.id === 'kippa');
                            
            if (ligneAajouter) {
                storeInventaire.ajouterQuantiteItem('kippa', 'quantite', 1);
                storeInventaire.ajouter('poid', lexiqueArmure.kippa.poid);
            } else {
                const ligne = {
                    equipe: 0,
                    action: lexiqueArmure.kippa.action,
                    cible: lexiqueArmure.kippa.cible,
                    important: lexiqueArmure.kippa.important,
                    id: lexiqueArmure.kippa.id,
                    nom: lexiqueArmure.kippa.nom,
                    quantite: 1,
                    img: lexiqueArmure.kippa.img,
                    description: lexiqueArmure.kippa.description,
                    valeur: lexiqueArmure.kippa.valeur,
                    type: lexiqueArmure.kippa.type, 
                    poid: lexiqueArmure.kippa.poid,
                };
                storeInventaire.ajouterLigneInventaire(ligne);
                storeInventaire.ajouter('poid', lexiqueArmure.kippa.poid);

                dialogueSet("Tiens une kippa gratuite.");
                stickerSet('https://image.noelshack.com/fichiers/2022/31/1/1659378192-bof.png');

            }
        }
    }
}