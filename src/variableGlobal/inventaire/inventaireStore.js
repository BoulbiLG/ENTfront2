import create from 'zustand';

import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../graphisme/item/item';

const inventaireStore = create((set) => ({
  inventaire: [
    { equipe: 0, action: 5, important: 'non', id: 'pomme', nom: 'Pomme', quantite: 3, img: pommeURL, description: 'fdp.', valeur: 2, type: 'consomable'},
    { equipe: 0, action: 5, important: 'non', id: 'epee', nom: 'Epée', quantite: 1, img: epeeURL, description: 'fdp.', valeur: 50, type: 'arme'},
    { equipe: 0, action: 5, important: 'non', id: 'bouclier', nom: 'Bouclier', quantite: 1, img: bouclierURL, description: 'fdp.', valeur: 30, type: 'arme'},
    { equipe: 0, action: 5, cible: 'tete', important: 'non', id: 'casque', nom: 'Casque', quantite: 12, img: casqueURL, description: 'fdp.', valeur: 30, type: 'armure'},
    { equipe: 0, action: 5, cible: 'buste', important: 'non', id: 'plastron', nom: 'Plastron', quantite: 1, img: plastronURL, description: 'fdp.', valeur: 30, type: 'armure'},
    { equipe: 0, action: 5, cible: 'jambe', important: 'non', id: 'jambiere', nom: 'Jambière', quantite: 7, img: jambiereURL, description: 'fdp.', valeur: 30, type: 'armure'},
    { equipe: 0, action: 5, cible: 'bras', important: 'non', id: 'epauliere', nom: 'Epaulière', quantite: 53, img: epauliereURL, description: 'fdp.', valeur: 30, type: 'armure'},
    { equipe: 0, action: 5, cible: 'pied', important: 'non', id: 'nike', nom: 'Nike', quantite: 2, img: nikeURL, description: 'fdp.', valeur: 30, type: 'armure'},
  ],

  ajouterQuantiteItem: (id, champ, nombre) => {
    set((state) => ({
      inventaire: state.inventaire.map((item) =>
        item.id === id ? { ...item, [champ]: item[champ] + nombre } : item
      ),
    }));
  },

  retireQuantiteItem: (id, champ, nombre) => {
    set((state) => ({
      inventaire: state.inventaire.map((item) =>
        item.id === id ? { ...item, [champ]: Math.max(item[champ] - nombre, 0) } : item
      ),
    }));
  },

  ajouterLigneInventaire: (nouvelItem) => {
    set((state) => ({
      inventaire: [...state.inventaire, nouvelItem],
    }));
  },

  retirerLigneInventaire: (id) => {
    set((state) => ({
      inventaire: state.inventaire.filter((item) => item.id !== id),
    }));
  },
}));

export default inventaireStore;