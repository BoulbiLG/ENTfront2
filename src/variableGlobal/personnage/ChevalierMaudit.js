import create from 'zustand';
import normal from '../../asset/personnage/chevalierMaudit/normal.png';

import { pommeURL } from '../../graphisme/item/item';

const ChevalierMauditStore = create((set) => ({
  nom: 'ChevalierMaudit',
  zoneX: -1,
  zoneY: -2,
  zoneZ: 0,
  x: 200,
  y: 100,
  etat: 'PNJ',
  soumis: 'non',
  URL: 'https://cloud.onche.org/d682eecd-0f0e-42a8-86bc-5e2e2d5f4598!xMhG6dJaYD/128',

  img: {
    normal: normal,
  },

  // STAT

  vieMax: 115,
  vie: 115,
  niveau: 2, 
  expMax: 20,
  exp: 0,
  attaque: 7,
  defense: 12,
  vitesse: 6,
  courage: 4,             // augmente le taux de coup critique, min = 5
  magieMax: 10,
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
        texte: "Je suis entrain d'écrire un nouvel article de la gazette onchoise",
        sticker: 'https://image.noelshack.com/fichiers/2020/17/3/1587583571-torchon.png',
        index: 1},
      r2: {
        texte: 'il ne tardera pas à sortir',
        sticker: 'https://image.noelshack.com/fichiers/2020/37/2/1599581994-1599581859-d2f85d2f-8787-4ab7-80eb-f71e150a442e.jpeg',
        index: 2},
      r3: {
        texte: `je pense appeler cet article "Sujet hebdomadaire pour stimuler l'activité".`,
        sticker: 'https://image.noelshack.com/fichiers/2022/02/1/1641830215-chevalierpret.png',
        index: 2},
    },

    dialogueDesir: "J'aime beaucoup les armures.",
    desir: ['casque', 'epauliere', 'jambiere', 'plastron', 'nike'],
    questionPose: [],

    replique: {
      colere: {r1: 'Tu peux me laisser ?', r2: "T'as compris oh ?", r3: "OH sale pédé c'est quoi ton soucis ??", r4: "Va te faire niquer", r5: "Vazy tu l'auras voulu !!!"},
      tristesse: "C'est pas gentil ! *snif snif...",
      joie: "Ayaaaa énorme !",
      peur: "Tu... tu en sûr ?",
      confiance: {r1: "Arrête tu vas me faire rougir ahah.", r2: "Tu sais ? Je t'aime bien", r3: "Sache que tu es pour moi un ami !"},
      empathie: "Oh ! C'est gentil.",
    },

    compteurReplique: 0,

    etatDialogue: '',

  },

  dialogue1: 'Ces rumeurs au sujet de la destruction de Onche sont elles vraies ?',
  dialogueDesir: "J'aime beaucoup les épée.",
  desir: ['epee'],
  questionPose: [],
  replique: {
      colere: {r1: 'Tu peux me laisser ?', r2: "T'as compris oh ?", r3: "OH sale pédé c'est quoi ton soucis ??", r4: "Va te faire niquer", r5: "Vazy tu l'auras voulu !!!"},
      tristesse: "C'est pas gentil ! *snif snif...",
      joie: "Ayaaaa énorme !",
      peur: "Tu... tu en sûr ?",
      confiance: {r1: "Arrête tu vas me faire rougir ahah.", r2: "Tu sais ? Je t'aime bien", r3: "Sache que tu es pour moi un ami !"},
      empathie: "Oh ! C'est gentil.",
  },
  compteurReplique: 0,

  // EQUIPEMENT

  equipement: [
    { id: '', type: 'tete', x: 674, y: 25, cible: 'tete'},
    { id: '', type: 'buste', x: 50, y: 140, cible: 'buste' },
    { id: '', type: 'bras', x: 674, y: 140, cible: 'bras' },
    { id: '', type: 'jambe', x: 50, y: 357, cible: 'jambe' },
    { id: '', type: 'mainG', x: 50, y: 250, cible: 'main' },
    { id: '', type: 'mainD', x: 674, y: 255, cible: 'main' },
    { id: '', type: 'pied', x: 50, y: 463, cible: 'pied' },
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

export default ChevalierMauditStore;