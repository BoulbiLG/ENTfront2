
import argent from '../../../audio/audio/argent.mp3';
import inventaireStore from "../../../variableGlobal/inventaire/inventaireStore";
import { lexiqueArmure } from "../../../variableGlobal/item/lexiqueArmure";

export const acheterMeuble = (prix, code, type, storeCelestin, storeInventaire, storeJoueurs, dialogueSet, stickerSet, itemCourant, quantite, storeParametre) => {
    if (quantite != '6000000') {
        const poidTotal = storeInventaire.poidMeuble + (itemCourant.poid * quantite);

        if (storeInventaire.poidMeubleMax >= poidTotal) {
            let compteurReduction = 0;
            let prixReel = 0;

            // ==================== VERIFICATION REDUCTION ==================== //

            for (let i = 0; i < storeJoueurs.length; i++) {
                const store = storeJoueurs[i];
                
                for (let i = 0; i < store.equipement.length; i++) {
                    const equipement = store.equipement[i];
                    
                    if (equipement.id === 'kippa') {
                        compteurReduction++;
                    }
                    
                }

            }

            // ==================== CALCUL PRIX ==================== //

            if (compteurReduction > 0) {
                const reduc = compteurReduction / 10 + 1;
                const taux = parseFloat(20 * reduc);
                prixReel = (prix - ((taux * prix) / 100)) * quantite;

                /*
                console.log('===========');
                console.log('reduc : ', reduc);
                console.log('prix : ', prix);
                console.log('taux : ', taux);
                console.log('prixReel : ', prixReel);
                */

                if (compteurReduction > 1) {
                    dialogueSet(`Je vois que plusieurs de tes membres font partie de la communauté que nous connaissons bien. Je baisse le prix à ${parseInt(prixReel)}€`);
                    stickerSet('https://image.noelshack.com/fichiers/2024/09/7/1709423388-pz.png');
                } else {
                    dialogueSet(`Je vois qu'un de tes membres fait partie de la communauté que nous connaissons bien. Je baisse le prix à ${parseInt(prixReel)}€`);
                    stickerSet('https://image.noelshack.com/fichiers/2024/09/7/1709423388-pz.png');
                }
            } else {
                prixReel = prix * quantite;
                dialogueSet("Merci pour ton argent le goy.");
                stickerSet('https://image.noelshack.com/fichiers/2023/21/4/1684975819-jacques-attali-juif-feuj-nez-golem-israel.png');
            }

            if (code == 'test' && storeCelestin.codeReduction == 'utilisable') {
                if (quantite < 2) {
                    prixReel = 0;
                    storeCelestin.modifier('codeReduction', 'fini');
                    dialogueSet("Oh le sale goy puant ! Il m'a baisé . . .");
                    stickerSet('https://image.noelshack.com/fichiers/2023/05/5/1675432902-meyer-habib.png');
                } else {
                    dialogueSet("Ce code de réduction ne marche qu'avec 1 quantité");
                    stickerSet('https://image.noelshack.com/fichiers/2017/20/1494964219-laveine.png');
                }
            } else if (code == 'test' && storeCelestin.codeReduction == 'fini') {
                dialogueSet("Tu me baiseras pas enfant de pute.");
                stickerSet('https://image.noelshack.com/fichiers/2017/20/1495031964-1485484836-larry.png');
            }

            // ==================== ACHAT ==================== //

            if (storeCelestin.argent >= prixReel) {
                if (code != 'test') {
                    if (storeCelestin.codeReduction != 'fini') {
                        storeCelestin.retirer('argent', parseInt(prixReel));

                        const audio = new Audio(argent);
                        audio.volume = storeParametre.volumeBruitage / 100;
                        audio.play();

                        const ligneAajouter = storeInventaire.meubles.find((element) => element.type === type);
                            
                        if (ligneAajouter) {
                            storeInventaire.ajouterQuantiteMeuble(type, 'quantite', 1 * quantite);
                            storeInventaire.ajouter('poidMeuble', itemCourant.poid * quantite);
                        } else {
                            const ligne = {
                                equipe: 0,
                                action: itemCourant.action,
                                cible: itemCourant.cible,
                                important: itemCourant.important,
                                id: storeInventaire.idMeuble + 1,
                                nom: itemCourant.nom,
                                quantite: 1 * quantite,
                                img: itemCourant.img,
                                description: itemCourant.description,
                                valeur: itemCourant.valeur,
                                type: itemCourant.type, 
                                poid: itemCourant.poid,
                            };
                            storeInventaire.ajouterLigneMeuble(ligne);
                            storeInventaire.ajouter('poidMeuble', itemCourant.poid * quantite);
                            storeInventaire.ajouter('idMeuble', 1);
                        }
                    }
                } else {
                    storeCelestin.retirer('argent', parseInt(prixReel));

                    const audio = new Audio(argent);
                    audio.volume = storeParametre.volumeBruitage / 100;
                    audio.play();

                    const ligneAajouter = storeInventaire.meubles.find((element) => element.type === type);
                        
                    if (ligneAajouter) {
                        storeInventaire.ajouterQuantiteMeuble(type, 'quantite', 1 * quantite);
                        storeInventaire.ajouter('poidMeuble', itemCourant.poid * quantite);
                    } else {
                        const ligne = {
                            equipe: 0,
                            action: itemCourant.action,
                            cible: itemCourant.cible,
                            important: itemCourant.important,
                            id: storeInventaire.idMeuble + 1,
                            nom: itemCourant.nom,
                            quantite: 1 * quantite,
                            img: itemCourant.img,
                            description: itemCourant.description,
                            valeur: itemCourant.valeur,
                            type: itemCourant.type, 
                            poid: itemCourant.poid,
                        };
                        storeInventaire.ajouterLigneMeuble(ligne);
                        storeInventaire.ajouter('poidMeuble', itemCourant.poid * quantite);
                        storeInventaire.ajouter('idMeuble', 1);
                    }
                }
            } else {
                if (code == 'test') {
                    if (storeCelestin.codeReduction != 'utilisable') {
                        dialogueSet("Je vois que t'as pas assez d'argent le goy.");
                        stickerSet('https://image.noelshack.com/fichiers/2017/20/1495053127-paslebol.png');
                    } else {
                        dialogueSet("Tu me baiseras pas 2 fois enfant de pute.");
                        stickerSet('https://image.noelshack.com/fichiers/2017/20/1495031964-1485484836-larry.png');
                    }
                } else {
                    dialogueSet("Je vois que t'as pas assez d'argent le goy.");
                    stickerSet('https://image.noelshack.com/fichiers/2017/20/1495053127-paslebol.png');
                }
            }
        } else {
            dialogueSet("Tu portes trop de choses sur toi.");
            stickerSet('https://image.noelshack.com/fichiers/2017/20/1495053127-paslebol.png');
        }
    } else {

        const poidKippa = storeInventaire.poid + lexiqueArmure.kippa.poid;

        if (storeCelestin.kippaMillion == 'utilisable' && storeInventaire.poidMax >= poidKippa) {
            storeCelestin.modifier('kippaMillion', 'fini')

            const ligneAajouter = storeInventaire.meubles.find((element) => element.id === 'kippa');
                            
            if (ligneAajouter) {
                storeInventaire.ajouterQuantiteMeuble('kippa', 'quantite', 1);
                storeInventaire.ajouter('poidMeuble', lexiqueArmure.kippa.poid);
            } else {
                const ligne = {
                    equipe: 0,
                    action: lexiqueArmure.kippa.action,
                    cible: lexiqueArmure.kippa.cible,
                    important: lexiqueArmure.kippa.important,
                    id: storeInventaire.idMeuble + 1,
                    nom: lexiqueArmure.kippa.nom,
                    quantite: 1,
                    img: lexiqueArmure.kippa.img,
                    description: lexiqueArmure.kippa.description,
                    valeur: lexiqueArmure.kippa.valeur,
                    type: lexiqueArmure.kippa.type, 
                    poid: lexiqueArmure.kippa.poid,
                };
                storeInventaire.ajouterLigneMeuble(ligne);
                storeInventaire.ajouter('poidMeuble', lexiqueArmure.kippa.poid);
                storeInventaire.ajouter('idMeuble', 1);

                dialogueSet("Tiens une kippa gratuite.");
                stickerSet('https://image.noelshack.com/fichiers/2022/31/1/1659378192-bof.png');

            }
        }
    }
}