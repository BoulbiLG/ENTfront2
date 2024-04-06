import create from 'zustand';
import normal from '../../asset/personnage/franckDubosc/normal.png';
import icone from '../../asset/personnage/franckDubosc/icone.png';

import { lexiqueOffensive } from '../item/magie/lexiqueOffensive';
import { lexiqueSoin } from '../item/magie/lexiqueSoin';
import { lexiqueStatAugmente } from '../item/magie/lexiqueStatAugmente';
import { lexiqueStatBaisse } from '../item/magie/lexiqueStatBaisse';

import { lexiqueConsomable } from '../item/lexiqueConsomable';

const FranckDuboscStore = create((set) => ({
  zoneXBase: 2,
  zoneYBase: -5,
  zoneZBase: 1,
  zoneX: 2,
  zoneY: -5,
  zoneZ: 1,
  x: 500,
  y: 200,
  
  nom: 'FranckDubosc',
  etat: 'PNJ',
  soumis: 'non',
  status: 'normal',
  classe: 'Mangeur de caca / Maitre des dilemmes',
  sexe: 'h',

  imgNormal: normal,
  imgTete: icone,
  imgIcone: icone,

  // STAT

  vieMax: 1,
  vie: 1,
  niveau: 1, 
  expMax: 100,
  exp: 0,
  attaque: 20,
  defense: 1,
  vitesse: 20,
  courage: 5,             // augmente le taux de coup critique, min = 5
  magieMax: 50,
  magie: 50,
  testo: 0,
  bodycount: 0,

  // HUMEUR

  joie: 50,
  colere: 0,
  tristesse: 0,
  confiance: 0,
  peur: 0,
  empathie: 0,

  // DIALOGUE
  
  dialogue: {

    dialogueNormal: {
      r1: {
        texte: "Suce moi",
        sticker: 'https://image.noelshack.com/fichiers/2023/05/7/1675552945-chat.png',
        index: 1},
      r2: {
        texte: "... voilà les paroles qui m'ont été adressé ce matin même par ZinedineZ",
        sticker: 'https://image.noelshack.com/fichiers/2023/05/7/1675552945-chat.png',
        index: 2},
      r3: {
        texte: `Il est mal élevé on est corda ?`,
        sticker: 'https://image.noelshack.com/fichiers/2023/05/7/1675552945-chat.png',
        index: 3},
      r4: {
        texte: `J'ai jamais été autant chokbar de toute ma vie.`,
        sticker: 'https://image.noelshack.com/fichiers/2023/05/7/1675552945-chat.png',
        index: 4},
      r5: {
        texte: `A coté, la décadence des soirées techno du samedi soir c'est gentil...`,
        sticker: 'https://image.noelshack.com/fichiers/2023/05/7/1675552945-chat.png',
        index: 5},
      r6: {
        texte: `Ah, et sinon si tu as des bon caca a me donner n'hésite pas !`,
        sticker: 'https://image.noelshack.com/fichiers/2023/05/7/1675552945-chat.png',
        index: 6},
    },

    dialogueDesir: "J'aime beaucoup les caca bien chaud.",
    desir: ['caca'],
    questionPose: [],

    replique: {
      colere: {texte: "OH sale pédé c'est quoi ton soucis ??", sticker: 'https://image.noelshack.com/fichiers/2017/05/1485991738-risitas3.png'},
      tristesse: {texte: "C'est pas gentil ! *snif snif...", sticker: 'https://image.noelshack.com/fichiers/2017/15/1492145702-bloggif-58f055f33c5de.png'},
      joie: {texte: "Ayaaaa énorme !", sticker: 'https://image.noelshack.com/fichiers/2016/26/1467335935-jesus1.png'},
      peur: {texte: "Tu... tu en sûr ?", sticker: 'https://image.noelshack.com/fichiers/2021/10/2/1615328575-unitinu-1.png'},
      confiance: {texte: "Arrête tu vas me faire rougir ahah.", sticker: 'https://image.noelshack.com/fichiers/2017/39/3/1506463228-risibg.png'},
      empathie: {texte: "Oh ! C'est gentil.", sticker: 'https://image.noelshack.com/fichiers/2018/36/2/1536096048-i-know-that-feel-bro-owen-07.png'},
      combat: {texte: "Tu l'auras voulu enculé !!!", sticker: 'https://image.noelshack.com/fichiers/2021/43/4/1635454847-elton-john-tison-golem.png'},
    },

    compteurReplique: 0,

    etatDialogue: '',

  },

  questionPose: [],

  // EQUIPEMENT

  equipement: [
    { id: '', type: 'tete', x: 674, y: 25, cible: 'tete', img: ''},
    { id: '', type: 'buste', x: 50, y: 140, cible: 'buste', img: '' }, 
    { id: '', type: 'bras', x: 674, y: 140, cible: 'bras', img: '' },
    { id: '', type: 'jambe', x: 50, y: 357, cible: 'jambe', img: '' },
    { id: '', type: 'mainG', x: 50, y: 250, cible: 'main', img: '' },
    { id: '', type: 'mainD', x: 674, y: 255, cible: 'main', img: '' },
    { id: '', type: 'pied', x: 50, y: 463, cible: 'pied', img: '' },
  ],

  // MAGIE

  magieTout: {

    proba1: {
      min: 1,
      max: 10,
    },

    lexique: [

      // pistolet a pisse
      {
        id: lexiqueOffensive.pistoletPisse.id, 
        nom: lexiqueOffensive.pistoletPisse.nom, 
        type: lexiqueOffensive.pistoletPisse.type,
        imgIcone: lexiqueOffensive.pistoletPisse.imgIcone,
        consequence: lexiqueOffensive.pistoletPisse.consequence,
        status: lexiqueOffensive.pistoletPisse.status,
        tour: lexiqueOffensive.pistoletPisse.tour,
        action: lexiqueOffensive.pistoletPisse.action,
        niveau: lexiqueOffensive.pistoletPisse.niveau, 
        cout: lexiqueOffensive.pistoletPisse.cout,
      },

      // nofap
      {
        id: lexiqueStatAugmente.nofap.id, 
        nom: lexiqueStatAugmente.nofap.nom, 
        type: lexiqueStatAugmente.nofap.type,
        imgIcone: lexiqueStatAugmente.nofap.imgIcone,
        consequence: lexiqueStatAugmente.nofap.consequence,
        status: lexiqueStatAugmente.nofap.status,
        tour: lexiqueStatAugmente.nofap.tour,
        action: lexiqueStatAugmente.nofap.action, 
        niveau: lexiqueStatAugmente.nofap.niveau, 
        consequence: lexiqueStatAugmente.nofap.consequence, 
        cout: lexiqueStatAugmente.nofap.cout
      },

      // exibitionisme
      {
        id: lexiqueStatBaisse.exibitionisme.id, 
        nom: lexiqueStatBaisse.exibitionisme.nom, 
        action: lexiqueStatBaisse.exibitionisme.action, 
        type: lexiqueStatBaisse.exibitionisme.type, 
        niveau: lexiqueStatBaisse.exibitionisme.niveau, 
        cout: lexiqueStatBaisse.exibitionisme.cout,
        imgIcone: lexiqueStatBaisse.exibitionisme.imgIcone,
        consequence: lexiqueStatBaisse.exibitionisme.consequence,
        status: lexiqueStatBaisse.exibitionisme.status,
        tour: lexiqueStatBaisse.exibitionisme.tour,
      },

      // benediction zoulman
      {
        id: lexiqueSoin.benedictionZoulman.id, 
        nom: lexiqueSoin.benedictionZoulman.nom, 
        action: lexiqueSoin.benedictionZoulman.action, 
        type: lexiqueSoin.benedictionZoulman.type, 
        niveau: lexiqueSoin.benedictionZoulman.niveau, 
        cout: lexiqueSoin.benedictionZoulman.cout,
        imgIcone: lexiqueSoin.benedictionZoulman.imgIcone,
        consequence: lexiqueSoin.benedictionZoulman.consequence,
        status: lexiqueSoin.benedictionZoulman.status,
        tour: lexiqueSoin.benedictionZoulman.tour,
        
      },

      // benediction zoulman
      {
        id: lexiqueSoin.heinekenSecours.id, 
        nom: lexiqueSoin.heinekenSecours.nom, 
        action: lexiqueSoin.heinekenSecours.action, 
        type: lexiqueSoin.heinekenSecours.type, 
        niveau: lexiqueSoin.heinekenSecours.niveau, 
        cout: lexiqueSoin.heinekenSecours.cout,
        imgIcone: lexiqueSoin.heinekenSecours.imgIcone,
        consequence: lexiqueSoin.heinekenSecours.consequence,
        status: lexiqueSoin.heinekenSecours.status,
        tour: lexiqueSoin.heinekenSecours.tour,
      },
      
    ],

  },

  // BADGE

  badge: [],

  itemDropable: [
    {
      tauxApparition: 80,
      id: lexiqueConsomable.pomme.id,
      img: lexiqueConsomable.pomme.img,
      quantite: {
        min: 1,
        max: 5,
      },
      action: lexiqueConsomable.pomme.action,
      important: lexiqueConsomable.pomme.important,
      nom: lexiqueConsomable.pomme.nom,
      description: lexiqueConsomable.pomme.description,
      valeur: lexiqueConsomable.pomme.valeur,
      type: lexiqueConsomable.pomme.type,
      poid: lexiqueConsomable.pomme.poid,
      cible: lexiqueConsomable.pomme.cible,
    }
  ],

  comportement: '',



  // ================== METHODE ================== //



  // ajoute valeur

  ajouter: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] + valeur,
    }));
  },

  // retire valeur

  retirer: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] - valeur,
    }));
  },

  // modifie valeur

  modifier: (champ, nouvelleValeur) => {
    set({ [champ]: nouvelleValeur });
  },

  // modifie ID de equipement

  modifierIdParType: (type, valeur) => {
    set((state) => ({
      equipement: state.equipement.map((equipementItem) =>
        equipementItem.type === type ? { ...equipementItem, id: valeur } : equipementItem
      ),
    }));
  },

  // modifie img de equipement

  modifierImgParType: (type, valeur) => {
    set((state) => ({
      equipement: state.equipement.map((equipementItem) =>
        equipementItem.type === type ? { ...equipementItem, img: valeur } : equipementItem
      ),
    }));
  },

  // ajoute element tableau questionPose

  ajouterQuestion: (id) => {
    set((state) => ({
      questionPose: [...state.questionPose, id],
    }));
  },

  // vide tableau questionPose
  
  viderQuestion: () => {
    set({ questionPose: [] });
  },
}));

export default FranckDuboscStore;