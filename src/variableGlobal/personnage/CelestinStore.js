import create from 'zustand';
import tete from '../../asset/personnage/celestin/tete.png';
import icone from '../../asset/personnage/celestin/icone.png';
import { lexiqueMagie } from '../item/magie/lexiqueMagie';

const CelestinStore = create((set) => ({

  // EQUIPEMENT

  equipement: [
    { id: '', type: 'tete', x: 674, y: 25, cible: 'tete', img: ''},
    { id: '', type: 'buste', x: 50, y: 140, cible: 'buste', img: '' }, 
    { id: '', type: 'bras', x: 674, y: 140, cible: 'bras', img: '' },
    { id: '', type: 'jambe', x: 50, y: 357, cible: 'jambe', img: '' },
    { id: 'epee', type: 'mainG', x: 50, y: 250, cible: 'main', img: '' },
    { id: 'epee', type: 'mainD', x: 674, y: 255, cible: 'main', img: '' },
    { id: '', type: 'pied', x: 50, y: 463, cible: 'pied', img: '' },
  ],

  // STAT

  vieMax: 100,
  vie: 50,
  niveau: 3, 
  expMax: 100,
  exp: 23,
  attaque: 10,
  defense: 10,
  vitesse: 10,
  courage: 5,
  magieMax: 100,
  magie: 100,
  argent: 1000000,
  testo: 0,
  bodycount: 0,

  nom: 'Celestin',
  status: 'normal',
  classe: 'Invisible-man',
  amoureuse: [],
  codeReduction: 'utilisable',
  kippaMillion: 'utilisable',

  // HUMEUR

  joie: 50,
  colere: 0,
  tristesse: 0,
  peur: 0,

  imgNormal: '',
  imgTete: tete,
  imgIcone: icone,

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