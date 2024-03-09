import create from 'zustand';
import normal from '../../asset/personnage/cleamolette/normal.png';
import tete from '../../asset/personnage/cleamolette/tete.png';
import icone from '../../asset/personnage/cleamolette/icone.png';

import { pommeURL } from '../../graphisme/item/item';
import { lexiqueMagie } from '../item/magie/lexiqueMagie';

const CleaMoletteStore = create((set) => ({
  
  zoneXBase: 0,
  zoneYBase: -4,
  zoneZBase: 999999,
  zoneX: 0,
  zoneY: -4,
  zoneZ: 999999,
  x: 230,
  y: 200,
  
  nom: 'CleaMolette',
  etat: 'PNJ',
  soumis: 'non',
  status: 'normal',
  classe: 'Modo',
  sexe: 'f',

  imgNormal: normal,
  imgTete: tete,
  imgIcone: icone,

  // STAT

  vieMax: 80,
  vie: 80,
  niveau: 1, 
  expMax: 10,
  exp: 0,
  attaque: 5,
  defense: 8,
  vitesse: 10,
  courage: 3,             // augmente le taux de coup critique, min = 5
  magieMax: 150,
  magie: 150,
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
        texte: "J'adore les petits chaton hihi",
        sticker: 'https://image.noelshack.com/fichiers/2017/01/1483837640-lana5-1.jpg',
        index: 1},
    },

    dialogueDesir: "J'aime beaucoup les pommes.",
    desir: ['pomme'],
    questionPose: [],

    replique: {
      colere: {texte: "Mais euh arrêteuh !", sticker: 'https://image.noelshack.com/fichiers/2017/05/1485991738-risitas3.png'},
      tristesse: {texte: "Méchant !", sticker: 'https://image.noelshack.com/fichiers/2017/15/1492145702-bloggif-58f055f33c5de.png'},
      joie: {texte: "c'est amusant ce que tu me dis la.", sticker: 'https://image.noelshack.com/fichiers/2016/26/1467335935-jesus1.png'},
      peur: {texte: "Tu... tu en sûr ?", sticker: 'https://image.noelshack.com/fichiers/2021/10/2/1615328575-unitinu-1.png'},
      confiance: {texte: "Arrête tu vas me faire rougir ahah.", sticker: 'https://image.noelshack.com/fichiers/2017/39/3/1506463228-risibg.png'},
      empathie: {texte: "Oh ! C'est gentil.", sticker: 'https://image.noelshack.com/fichiers/2018/36/2/1536096048-i-know-that-feel-bro-owen-07.png'},
      combat: {texte: "T'es finito", sticker: 'https://image.noelshack.com/fichiers/2021/43/4/1635454847-elton-john-tison-golem.png'},
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

    lexique: [
      {id: lexiqueMagie.pistoletPisse.id, nom: lexiqueMagie.pistoletPisse.nom, action: lexiqueMagie.pistoletPisse.action, 
        type: lexiqueMagie.pistoletPisse.type, niveau: lexiqueMagie.pistoletPisse.niveau, cout: lexiqueMagie.pistoletPisse.cout},
      {id: lexiqueMagie.nofap.id, nom: lexiqueMagie.nofap.nom, action: lexiqueMagie.nofap.action, type: lexiqueMagie.nofap.type,
        niveau: lexiqueMagie.nofap.niveau, consequence: lexiqueMagie.nofap.consequence, cout: lexiqueMagie.nofap.cout},
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

export default CleaMoletteStore;