import create from 'zustand';

const combatStore = create((set) => ({

  combat: 'non',
  type: '',
  tour: '',
  nombreEnnemi: 0,

  nom: [],
  ennemiEnVie: [],
  soinTour: [],

  historique: [],
  effetTemporaire: [],












  ajouter: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] + valeur,
    }));
  },

  retirer: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] - valeur,
    }));
  },

  modifier: (champ, nouvelleValeur) => {
    set({ [champ]: nouvelleValeur });
  },

  // ajoute element tableau

  ajouterNom: (id) => {
    set((state) => ({
      nom: [...state.nom, id],
    }));
  },

  // ajoute element tableau

  ajouterSoinTour: (ligne) => {
    set((state) => ({
      soinTour: [...state.soinTour, ligne],
    }));
  },
  retirerSoinTour: (id) => {
    set((state) => ({
      soinTour: state.soinTour.filter((item) => item.id !== id),
    }));
  },

  // tableau

  ajouterTableau: (nomTableau, ligne) => {
    set((state) => ({
      [nomTableau]: [...state[nomTableau], ligne],
    }));
  },
  
  retirerTableau: (nomTableau, id) => {
    set((state) => ({
      [nomTableau]: state[nomTableau].filter((item) => item.id !== id),
    }));
  },

  modifierTableau: (nomTableau, nouvelleValeur) => {
    set({ [nomTableau]: nouvelleValeur });
  },

  // combat ennemiEnVie

  retirerEnnemiEnVie: (id) => {
    set((state) => ({
      ennemiEnVie: state.ennemiEnVie.filter((item) => item.id !== id),
    }));
  },

  retirerElement: (tableau, element) => {
    console.log('element : ', element);
    console.log('tableau : ', tableau);
    set((state) => ({
      [tableau]: state[tableau].filter(item => item !== element)
    }));
  }
  
  

}));

export default combatStore;