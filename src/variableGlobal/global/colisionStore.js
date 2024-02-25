import create from 'zustand';

const colisionStore = create((set) => ([

  {position: 'X0Y0Z0', mouvement: ['haut', 'bas']},
  {position: 'X0Y-1Z0', mouvement: ['haut', 'gauche', 'droite', 'bas']},
  {position: 'X-1Y-1Z0', mouvement: ['droite', 'bas']},
  {position: 'X1Y-1Z0', mouvement: ['gauche', 'bas']},
  {position: 'X0Y-2Z0', mouvement: ['haut', 'gauche', 'bas', 'droite']},
  {position: 'X-1Y-2Z0', mouvement: ['haut', 'gauche', 'droite']},
  {position: 'X1Y-2Z0', mouvement: ['haut', 'gauche', 'droite']},
  {position: 'X-2Y-2Z0', mouvement: ['haut', 'bas', 'droite']},
  {position: 'X2Y-2Z0', mouvement: ['gauche', 'bas', 'droite']},
  {position: 'X3Y-2Z0', mouvement: ['gauche']},
  {position: 'X0Y-3Z0', mouvement: ['haut', 'gauche', 'bas', 'droite']},
  {position: 'X-1Y-3Z0', mouvement: ['gauche', 'bas', 'droite']},
  {position: 'X1Y-3Z0', mouvement: ['gauche', 'bas', 'droite']},
  {position: 'X-2Y-3Z0', mouvement: ['haut', 'bas', 'droite']},
  {position: 'X2Y-3Z0', mouvement: ['gauche', 'bas', 'haut']},
]));

export default colisionStore;