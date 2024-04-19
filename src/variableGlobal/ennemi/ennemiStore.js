import create from 'zustand';

const ennemiStore = create((set) => ({

  ennemi: [],

  ajouter: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] + valeur,
    }));
  },

  modifier: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] = valeur,
    }));
  },

  retirer: (champ, valeur) => {
    set((state) => ({
      [champ]: state[champ] - valeur,
    }));
  },

  ajouterEnnemi: (nouvelItem) => {
    set((state) => ({
      ennemi: [...state.ennemi, nouvelItem],
    }));
  },

  retirerEnnemi: (id) => {
    set((state) => ({
        ennemi: state.ennemi.filter((item) => item.id !== id),
    }));
  },


  /*
  modifierChampsMeuble: (id, champs, valeur, idEnnemi) => {
    console.log(id, champs, valeur, idBase);
    set((state) => ({
        ennemi: state.ennemi.map((baseElement) => 
            baseElement.idEnnemi === idEnnemi ? {
                ...baseElement,
                meubles: baseElement.meubles.map((meublesElement) => 
                meublesElement.id === id && meublesElement[champs] !== undefined ? {
                        ...meublesElement,
                        [champs]: meublesElement[champs] = valeur,
                    } : meublesElement
                ),
            } : baseElement
        ),
    }));
  },
  */

  modifierChampsEnnemi: (idEnnemi, champs, valeur) => {
    console.log(idEnnemi, champs, valeur);
    set((state) => ({
      ennemi: state.ennemi.map((baseElement) =>
        baseElement.id === idEnnemi
          ? { ...baseElement, [champs]: valeur }
          : baseElement
      ),
    }));
  },

  ajouterChampsEnnemi: (idEnnemi, champs, valeur) => {
    set((state) => ({
      ennemi: state.ennemi.map((baseElement) =>
        baseElement.id === idEnnemi
          ? { ...baseElement, [champs]: baseElement[champs] + valeur }
          : baseElement
      ),
    }));
  },

  retirerChampsEnnemi: (idEnnemi, champs, valeur) => {
    set((state) => ({
      ennemi: state.ennemi.map((baseElement) =>
        baseElement.id === idEnnemi
          ? { ...baseElement, [champs]: baseElement[champs] - valeur } // Modifier ici
          : baseElement
      ),
    }));
  },
  

  supprimerEnnemi: (idEnnemi) => {
    set((state) => ({
        ennemi: state.ennemi.filter((item) => item.idEnnemi !== idEnnemi),
    }));
    },

}));

export default ennemiStore;
