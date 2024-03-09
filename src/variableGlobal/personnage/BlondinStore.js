import create from 'zustand';
import normal from '../../asset/personnage/blondin/normal.png';
import tete from '../../asset/personnage/blondin/tete.png';
import icone from '../../asset/personnage/blondin/icone.png';

import { lexiqueMagie } from '../item/magie/lexiqueMagie';

import { pommeURL } from '../../graphisme/item/item';

const BlondinStore = create((set) => ({
  zoneXBase: 0,
  zoneYBase: 0,
  zoneZBase: 0,
  zoneX: 0,
  zoneY: 0,
  zoneZ: 0,
  x: 630,
  y: 100,
  
  nom: 'Blondin',
  etat: 'PNJ',
  soumis: 'non',
  status: 'normal',
  classe: 'Modo (violeur de poule)',
  sexe: 'h',

  imgNormal: normal,
  imgTete: tete,
  imgIcone: icone,

  // STAT

  vieMax: 315,
  vie: 315,
  niveau: 15, 
  expMax: 20,
  exp: 0,
  attaque: 15,
  defense: 13,
  vitesse: 11,
  courage: 1,             // augmente le taux de coup critique, min = 5
  magieMax: 100,
  magie: 100,
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
        texte: "Tu passeras pas le mioche ...",
        sticker: 'https://image.noelshack.com/fichiers/2018/34/5/1535122003-clint-eastwood-doute.png',
        index: 1},
      r2: {
        texte: '... tu tiendras pas 2 minutes dehors',
        sticker: 'https://image.noelshack.com/fichiers/2018/01/4/1515034623-clintzoom.png',
        index: 2},
      r3: {
        texte: `sauf si tu me suce`,
        sticker: 'https://image.noelshack.com/fichiers/2018/34/5/1535122132-clint-eastwood-sourire-2.png',
        index: 2},
    },

    dialogueDesir: "J'aime beaucoup les cordons bleus au poulet.",
    desir: ['casque', 'epauliere', 'jambiere', 'plastron', 'nike'],
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
    { id: 'epee', type: 'mainG', x: 50, y: 250, cible: 'main', img: '' },
    { id: '', type: 'mainD', x: 674, y: 255, cible: 'main', img: '' },
    { id: '', type: 'pied', x: 50, y: 463, cible: 'pied', img: '' },
  ],

  // MAGIE

  magieTout: {

    lexique: [
      {id: lexiqueMagie.pistoletPisse.id, nom: lexiqueMagie.pistoletPisse.nom, action: lexiqueMagie.pistoletPisse.action, 
        type: lexiqueMagie.pistoletPisse.type, niveau: lexiqueMagie.pistoletPisse.niveau, cout: lexiqueMagie.pistoletPisse.cout},
      {id: lexiqueMagie.nofap.id, nom: lexiqueMagie.nofap.nom, action: lexiqueMagie.nofap.action, type: lexiqueMagie.nofap.type,
        niveau: lexiqueMagie.nofap.niveau, consequence: lexiqueMagie.nofap.consequence, cout: lexiqueMagie.nofap.cout},
      {id: lexiqueMagie.benedictionZoulman.id, nom: lexiqueMagie.benedictionZoulman.nom, action: lexiqueMagie.benedictionZoulman.action, 
        type: lexiqueMagie.benedictionZoulman.type, niveau: lexiqueMagie.benedictionZoulman.niveau, cout: lexiqueMagie.benedictionZoulman.cout}, 
    ],

  },

  // BADGE

  badge: [],

  itemDropable: [
    {
      id: 'pomme',
      img: pommeURL,
      quantite: {
        min: 1,
        max: 5,
      },
      action: 5,
      important: 'non',
      nom: 'Pomme',
      description: 'fdp.',
      valeur: 2,
      type: 'consomable',
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

export default BlondinStore;