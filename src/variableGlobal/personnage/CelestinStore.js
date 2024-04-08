import create from 'zustand';
import tete from '../../asset/personnage/celestin/tete.png';
import icone from '../../asset/personnage/celestin/icone.png';

import { lexiqueOffensive } from '../../variableGlobal/item/magie/lexiqueOffensive';
import { lexiqueSoin } from '../../variableGlobal/item/magie/lexiqueSoin';
import { lexiqueStatAugmente } from '../../variableGlobal/item/magie/lexiqueStatAugmente';
import { lexiqueStatBaisse } from '../../variableGlobal/item/magie/lexiqueStatBaisse';

const CelestinStore = create((set) => ({

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

  // STAT

  vieMax: 100,
  vie: 100,
  niveau: 3, 
  expMax: 100,
  exp: 0,
  attaque: 10,
  defense: 10,
  vitesse: 10,
  courage: 5,
  magieMax: 100,
  magie: 100,
  argent: 0,
  testo: 0,
  bodycount: 0,

  nom: 'Celestin',
  status: 'normal',
  classe: 'Invisible-man',
  amoureuse: [],
  codeReduction: 'utilisable',

  information: {
    tutoVillage: 'non',
    premierCombat: 'non',
    premiereCinematique: 'non',
  },

  kippaMillion: 'utilisable',
  piedBiche: 'fini',
  franckCaca: 'utilisable',
  goulagBlondin: '',
  attaquerBlondin: '',

  // HUMEUR

  joie: 50,
  colere: 0,
  tristesse: 0,
  peur: 0,

  imgNormal: '',
  imgTete: icone,
  imgIcone: icone,

  comportement: '',
  
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



  // ================== METHODE ================== //



  modifierInformation: (champs, valeur) => set((state) => ({
    information: {
      ...state.information,
      [champs]: valeur,
    },
  })),

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

  ajouterElementTexte: (id) => {
    set((state) => ({
      questionPose: [...state.questionPose, id],
    }));
  },

  // ajoute element tableau amoureuse

  ajouterAmoureuse: (id) => {
    set((state) => ({
      amoureuse: [...state.amoureuse, id],
    }));
  },

  // vide tableau questionPose
  
  viderQuestionPose: () => {
    set({ questionPose: [] });
  },
}));

export default CelestinStore;