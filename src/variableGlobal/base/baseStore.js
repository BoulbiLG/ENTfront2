import create from 'zustand';

import { lexiqueMeuble } from '../item/lexiqueMeuble';

const y = 100;

const baseStore = create((set) => ({

  base: [
    {
      meubles: [
        {
          type: lexiqueMeuble.drapeau.type, nom:
          lexiqueMeuble.drapeau.nom,
          img: lexiqueMeuble.drapeau.img,
          imgItem: lexiqueMeuble.drapeau.imgItem,
          description: lexiqueMeuble.drapeau.description,
          valeur: lexiqueMeuble.drapeau.valeur,
          poid: lexiqueMeuble.drapeau.poid,
          action: lexiqueMeuble.drapeau.action, 
          protection: lexiqueMeuble.drapeau.protection,
          piege: lexiqueMeuble.drapeau.piege,
          id: 1,
          x: 200,
          y: y,
        },
      ],
      zoneX: 0,
      zoneY: 0,
      zoneZ: 0,
      idBase: 1,

      protection: lexiqueMeuble.drapeau.protection,
      piege: lexiqueMeuble.drapeau.piege,
      nom: 'La base des puceaux',

    },
  ],

  idMeuble: 1,
  idBase: 1,

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

  ajouterBase: (nouvelItem) => {
    set((state) => ({
      base: [...state.base, nouvelItem],
    }));
  },

  retirerBase: (id) => {
    set((state) => ({
      base: state.base.filter((item) => item.id !== id),
    }));
  },


  modifierChampsMeuble: (id, champs, valeur, idBase) => {
    console.log(id, champs, valeur, idBase);
    set((state) => ({
        base: state.base.map((baseElement) => 
            baseElement.idBase === idBase ? {
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

  modifierChampsBase: (idBase, champs, valeur) => {
    console.log(idBase, champs, valeur);
    set((state) => ({
      base: state.base.map((baseElement) =>
        baseElement.idBase === idBase
          ? { ...baseElement, [champs]: valeur }
          : baseElement
      ),
    }));
  },

  ajouterChampsBase: (idBase, champs, valeur) => {
    set((state) => ({
      base: state.base.map((baseElement) =>
        baseElement.idBase === idBase
          ? { ...baseElement, [champs]: baseElement[champs] + valeur }
          : baseElement
      ),
    }));
  },

supprimerBase: (idBase) => {
  set((state) => ({
    base: state.base.filter((item) => item.idBase !== idBase),
  }));
},

retirerMeuble: (idBase, id) => {
  set((state) => ({
    base: state.base.map((baseElement) => 
      baseElement.idBase === idBase ? {
        ...baseElement,
        meubles: baseElement.meubles.filter((meuble) => meuble.id !== id),
      } : baseElement
    ),
  }));
},

ajouterMeuble: (idBase, nouvelElement) => {
  console.log(idBase, nouvelElement);
  console.log('njhgbfvdcs');
  set((state) => ({
    base: state.base.map((baseElement) =>
      baseElement.idBase === idBase
        ? { ...baseElement, meubles: [...baseElement.meubles, nouvelElement] }
        : baseElement
    ),
  }));
},

}));

export default baseStore;
