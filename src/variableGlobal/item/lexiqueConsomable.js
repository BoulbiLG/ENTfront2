import { pommeURL } from "../../graphisme/item/item";
import pomme from '../../asset/item/consomable/pomme.png';
import coca from '../../asset/item/consomable/coca.png';
import biere86 from '../../asset/item/consomable/86.png';
import pisse from '../../asset/item/consomable/pisse.png';
import monster from '../../asset/item/consomable/monster.png';
import eauGange from '../../asset/item/consomable/gange.png';
import sauceSonic from '../../asset/item/consomable/sonic.png';
import caca from '../../asset/item/consomable/caca.png';

export const lexiqueConsomable = {
    
    caca: {
        id: 'caca',
        nom: 'Caca fumant',
        img: caca,
        description: 'Une merde jaune fumante peu nutritive. Seul les pûrs tradis respectant les traditions conciliaires peuvent produire de telle création.',
        action: 1,
        valeur: 1,
        poid: 1,
        important: 'non',
        type: 'consomable',
        cible: '',
    },
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
        cible: '',
    },
    coca: {
        id: 'coca',
        nom: 'Couca Coula',
        img: coca,
        description: 'Une boison gazeuse satanique qui permet de soigner le poison.',
        action: 1,
        valeur: 100,
        poid: 2,
        important: 'non',
        type: 'consomable',
        cible: '',
    },
    biere86: {
        id: '86',
        nom: '86',
        img: biere86,
        description: "Une bière d'origine autrichienne absolument deguelasse, régénere cependant la magie.",
        action: 1,
        valeur: 200,
        poid: 2,
        important: 'non',
        type: 'consomable',
        cible: '',
    },
    bouteillepisse: {
        id: 'bouteillePisse',
        nom: 'Bouteille de pisse',
        img: pisse,
        description: "De la pisse fermenté, guérit tous les problèmes de status.",
        action: 1,
        valeur: 507,
        poid: 2,
        important: 'non',
        type: 'consomable',
        cible: '',
    },
    monster: {
        id: 'monster',
        nom: 'Monster',
        img: monster,
        description: "La boisson des dépressif, soigne la brulure mais peut augmenter la tristesse.",
        action: 1,
        valeur: 151,
        poid: 2,
        important: 'non',
        type: 'consomable',
        cible: '',
    },
    eauGange: {
        id: 'eauGange',
        nom: 'Eau du Gange',
        img: eauGange,
        description: "Une Bouteille d'eau contenant l'eau du Gange, un fleuve mystique indien. Soigne la paralysie.",
        action: 1,
        valeur: 226,
        poid: 5,
        important: 'non',
        type: 'consomable',
        cible: '',
    },
    sauceSonic: {
        id: 'sauceSonic',
        nom: 'Sauce Sonic',
        img: sauceSonic,
        description: "Une sauce japonaise interdite en Europe par le traité de Lisbonne. Son prix onéreux est causé par sa rareté en France. Soigne le gèle.",
        action: 1,
        valeur: 362,
        poid: 3,
        important: 'non',
        type: 'consomable',
        cible: '',
    },

}