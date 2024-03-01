import { pommeURL } from "../../graphisme/item/item";
import pomme from '../../asset/item/consomable/pomme.png';
import coca from '../../asset/item/consomable/coca.png';
import biere86 from '../../asset/item/consomable/86.png';
import pisse from '../../asset/item/consomable/pisse.png';
import monster from '../../asset/item/consomable/monster.png';
import eauGange from '../../asset/item/consomable/gange.png';
import sauceSonic from '../../asset/item/consomable/sonic.png';

export const lexiqueConsomable = {
    
    pomme: {
        id: 'pomme',
        nom: 'Pomme',
        img: pomme,
        description: 'Un produit savoureux de bonne facture qui empêche la constipation. Soigne de 5 Pv.',
        action: 5,
        valeur: 20,
        poid: 1,
        important: 'non',
        type: 'consomable',
    },
    coca: {
        id: 'coca',
        nom: 'Couca Coula',
        img: coca,
        description: 'Une boison gazeuse satanique qui permet de soigner le poison.',
        action: null,
        valeur: 100,
        poid: 2,
        important: 'non',
        type: 'consomable',
    },
    biere86: {
        id: '86',
        nom: '86',
        img: biere86,
        description: "Une bière d'origine autrichienne absolument deguelasse, régénere cependant la magie.",
        action: null,
        valeur: 200,
        poid: 2,
        important: 'non',
        type: 'consomable',
    },
    bouteillepisse: {
        id: 'bouteillePisse',
        nom: 'Bouteille de pisse',
        img: pisse,
        description: "De la pisse fermenté, guérit tous les problèmes de status.",
        action: null,
        valeur: 507,
        poid: 2,
        important: 'non',
        type: 'consomable',
    },
    monster: {
        id: 'monster',
        nom: 'Monster',
        img: monster,
        description: "La boisson des dépressif, soigne la brulure mais peut augmenter la tristesse.",
        action: null,
        valeur: 151,
        poid: 2,
        important: 'non',
        type: 'consomable',
    },
    eauGange: {
        id: 'eauGange',
        nom: 'Eau du Gange',
        img: eauGange,
        description: "Une Bouteille d'eau contenant l'eau du Gange, un fleuve mystique indien. Soigne la paralysie.",
        action: null,
        valeur: 226,
        poid: 5,
        important: 'non',
        type: 'consomable',
    },
    sauceSonic: {
        id: 'sauceSonic',
        nom: 'Sauce Sonic',
        img: sauceSonic,
        description: "Une sauce japonaise interdite en Europe par le traité de Lisbonne. Son prix onéreux est causé par sa rareté en France. Soigne le gèle.",
        action: null,
        valeur: 362,
        poid: 3,
        important: 'non',
        type: 'consomable',
    },

}