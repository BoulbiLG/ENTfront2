import create from 'zustand';
import normal from '../../asset/personnage/jouhn_ingroum/normal.png';
import tete from '../../asset/personnage/jouhn_ingroum/tete.png';
import icone from '../../asset/personnage/jouhn_ingroum/icone.png';
import { lexiqueMagie } from '../item/magie/lexiqueMagie';

import { pommeURL } from '../../graphisme/item/item';

const BenzemonstreStore = create((set) => ({
  
  zoneXBase: 0,
  zoneYBase: -2,
  zoneZBase: 0,
  zoneX: 0,
  zoneY: -2,
  zoneZ: 0,
  x: 500,
  y: 100,
  
  nom: 'Jouhn_ingroum',
  etat: 'PNJ',
  soumis: 'non',
  status: 'normal',
  classe: 'Yes life spé boucleur',
  sexe: 'h',

  imgNormal: normal,
  imgTete: tete,
  imgIcone: icone,

  // STAT

  vieMax: 100,
  vie: 100,
  niveau: 99, 
  expMax: 10,
  exp: 0,
  attaque: 10,
  defense: 10,
  vitesse: 10,
  courage: 5,             // augmente le taux de coup critique, min = 5
  magie: 10,
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
        texte: 'Ces rumeurs au sujet de la destruction de Onche...',
        sticker: 'https://image.noelshack.com/fichiers/2022/37/1/1663014384-ahi-pince-mais.png',
        index: 1},
      r2: {
        texte: '... Sont elles vraies ?',
        sticker: 'https://image.noelshack.com/fichiers/2017/39/3/1506463227-risitaspeur.png',
        index: 2},
    },

    dialogueDesir: "J'aime beaucoup les épée.",
    desir: ['epee'],
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

  // MAGIE
  
  magieTout: {

    lexique: [
      {id: lexiqueMagie.pistoletPisse.id, nom: lexiqueMagie.pistoletPisse.nom, action: lexiqueMagie.pistoletPisse.action, 
        type: lexiqueMagie.pistoletPisse.type, niveau: lexiqueMagie.pistoletPisse.niveau, cout: lexiqueMagie.pistoletPisse.cout},
      {id: lexiqueMagie.nofap.id, nom: lexiqueMagie.nofap.nom, action: lexiqueMagie.nofap.action, type: lexiqueMagie.nofap.type,
        niveau: lexiqueMagie.nofap.niveau, consequence: lexiqueMagie.nofap.consequence, cout: lexiqueMagie.nofap.cout},
    ],

  },

  // BADGE

  badge: [],



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

export default BenzemonstreStore;