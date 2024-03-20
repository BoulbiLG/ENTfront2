import create from 'zustand';

const parametreStore = create((set) => ({

  bruitage: 'oui',
  volumeBruitage: 0,

  musique: 'oui',
  volumeMusique: 0,

  FenetreHistoriqueCombatHeight: 30,
  FenetreHistoriqueCombatWidth: 60,
  FenetreHistoriqueCombatY: 0,
  FenetreHistoriqueCombatX: 0,
  FenetreHistoriqueCombatOpacite: 100,
  FenetreHistoriqueCombatTaille: 100,
  FenetreHistoriqueCombatApparition: 'true',
  FenetreHistoriqueCombatType: 'propre',

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

}));

export default parametreStore;