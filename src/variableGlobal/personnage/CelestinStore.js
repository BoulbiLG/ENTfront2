import create from 'zustand';
import tete from '../../asset/personnage/celestin/tete.png';

const CelestinStore = create((set) => ({

  // EQUIPEMENT

  equipement: [
    { id: '', type: 'tete', x: 674, y: 25, cible: 'tete'},
    { id: '', type: 'buste', x: 50, y: 140, cible: 'buste' }, 
    { id: '', type: 'bras', x: 674, y: 140, cible: 'bras' },
    { id: '', type: 'jambe', x: 50, y: 357, cible: 'jambe' },
    { id: '', type: 'mainG', x: 50, y: 250, cible: 'main' },
    { id: '', type: 'mainD', x: 674, y: 255, cible: 'main' },
    { id: '', type: 'pied', x: 50, y: 463, cible: 'pied' },
    { nom: 'Benzemonstre' }
  ],

  // STAT

  vieMax: 100,
  vie: 100,
  niveau: 1, 
  expMax: 100,
  exp: 23,
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

  // HUMEUR

  joie: 10,
  colere: 56,
  tristesse: 12,
  peur: 72,

  imgNormal: '',
  imgTete: tete,

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