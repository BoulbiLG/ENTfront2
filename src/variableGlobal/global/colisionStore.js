import create from 'zustand';

const colisionStore = create((set) => ([

  {position: 'X0Y0Z0', mouvement: ['haut', 'bas']},
  {position: 'X0Y-1Z0', mouvement: ['haut', 'gauche', 'droite', 'bas']},
  {position: 'X-1Y-1Z0', mouvement: ['droite', 'bas']},
  {position: 'X1Y-1Z0', mouvement: ['gauche', 'bas']},
  {position: 'X0Y-2Z0', mouvement: ['haut', 'gauche', 'bas', 'droite']},        // -2
  {position: 'X-1Y-2Z0', mouvement: ['haut', 'gauche', 'droite']},
  {position: 'X1Y-2Z0', mouvement: ['haut', 'gauche', 'droite']},
  {position: 'X-2Y-2Z0', mouvement: ['bas', 'droite']},
  {position: 'X2Y-2Z0', mouvement: ['gauche', 'bas', 'droite']},
  {position: 'X3Y-2Z0', mouvement: ['gauche']},
  {position: 'X0Y-3Z0', mouvement: ['haut', 'gauche', 'droite']},                 // Y-3
  {position: 'X-1Y-3Z0', mouvement: ['gauche', 'droite']},
  {position: 'X-4Y-3Z0', mouvement: ['bas']},
  {position: 'X1Y-3Z0', mouvement: ['gauche', 'bas', 'droite']},
  {position: 'X-2Y-3Z0', mouvement: ['haut', 'droite']},
  {position: 'X2Y-3Z0', mouvement: ['gauche', 'haut']},
  {position: 'X2Y-4Z0', mouvement: ['gauche', 'bas', 'haut']},                    // Y-4
  {position: 'X2Y-4Z0', mouvement: ['gauche', 'droite', 'bas']},               
  {position: 'X1Y-4Z0', mouvement: ['gauche', 'bas', 'haut', 'droite']},               
  {position: 'X0Y-4Z0', mouvement: ['gauche', 'bas', 'droite']},
  {position: 'X-1Y-4Z0', mouvement: ['gauche', 'bas', 'droite']},
  {position: 'X-2Y-4Z0', mouvement: ['gauche', 'bas', 'droite']},
  {position: 'X-3Y-4Z0', mouvement: ['gauche', 'droite']},
  {position: 'X-4Y-4Z0', mouvement: ['haut', 'droite']},

  // z 999999

  {position: 'X0Y-4Z999999', mouvement: ['bas']},
]));

export default colisionStore;