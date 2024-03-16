import create from 'zustand';

const equipeStore = create((set) => ({
  courant: 'Celestin',
  nom: ['Celestin', 'Jouhn_ingroum'],
  //nom: ['Celestin'],

  ajouterNom: (nouveauNom) => {
    set((state) => ({
      nom: [...state.nom, nouveauNom],
    }));
  },

  retirerNom: (nomARetirer) => {
    set((state) => ({
      nom: state.nom.filter((nom) => nom !== nomARetirer),
    }));
  },

  modifierCourant: (nouveauNom) => {
    set({ courant: nouveauNom });
  },
}));

export default equipeStore;