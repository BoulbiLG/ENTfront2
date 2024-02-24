import create from 'zustand';

const colisionStore = create((set) => ([

  {position: 'X0Y0Z0', mouvement: ['haut', 'bas']},
  {position: 'X0Y-1Z0', mouvement: ['haut', 'gauche', 'droite', 'bas']},

]));

export default colisionStore;