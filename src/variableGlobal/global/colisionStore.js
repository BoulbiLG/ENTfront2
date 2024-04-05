import create from 'zustand';

const colisionStore = create((set) => ({

  tutoVillageNon: [
    {position: 'X0Y0Z0', mouvement: ['bas']},
    {position: 'X0Y-1Z0', mouvement: ['haut', 'gauche', 'droite', 'bas']},
    {position: 'X-1Y-1Z0', mouvement: ['droite', 'bas']},
    {position: 'X1Y-1Z0', mouvement: ['gauche']},
    {position: 'X0Y-2Z0', mouvement: ['haut', 'gauche', 'bas', 'droite']},        // -2
    {position: 'X-1Y-2Z0', mouvement: ['haut', 'gauche', 'droite']},
    {position: 'X1Y-2Z0', mouvement: ['haut', 'gauche', 'droite']},
    {position: 'X-2Y-2Z0', mouvement: ['bas', 'droite']},
    {position: 'X2Y-2Z0', mouvement: ['gauche', 'bas', 'droite']},
    {position: 'X3Y-2Z0', mouvement: ['gauche']},
    {position: 'X0Y-3Z0', mouvement: ['haut', 'gauche', 'droite']},                 // Y-3
    {position: 'X-1Y-3Z0', mouvement: ['gauche', 'droite', 'haut']},
    {position: 'X-4Y-3Z0', mouvement: ['bas', 'haut']},
    {position: 'X1Y-3Z0', mouvement: ['gauche', 'bas', 'droite', 'haut']},
    {position: 'X-2Y-3Z0', mouvement: ['haut', 'droite']},
    {position: 'X2Y-3Z0', mouvement: ['gauche', 'haut']},
    {position: 'X2Y-4Z0', mouvement: ['gauche', 'bas', 'haut']},                    // Y-4
    {position: 'X2Y-4Z0', mouvement: ['gauche', 'droite', 'bas']},               
    {position: 'X1Y-4Z0', mouvement: ['gauche', 'haut', 'droite']},               
    {position: 'X0Y-4Z0', mouvement: ['gauche', 'bas', 'droite']},
    {position: 'X-1Y-4Z0', mouvement: ['gauche', 'bas', 'droite']},
    {position: 'X-2Y-4Z0', mouvement: ['gauche', 'droite']},
    {position: 'X-3Y-4Z0', mouvement: ['gauche', 'droite']},
    {position: 'X-4Y-4Z0', mouvement: ['haut', 'droite']},

    {position: 'X-1Y-5Z0', mouvement: ['haut', 'droite', 'gauche']},                          // Y-5
    {position: 'X-2Y-5Z0', mouvement: ['haut', 'droite']},
    {position: 'X0Y-5Z0', mouvement: ['haut', 'droite', 'bas', 'gauche']},
    {position: 'X1Y-5Z0', mouvement: ['haut', 'gauche', 'droite']},
    {position: 'X2Y-5Z0', mouvement: ['monter', 'gauche', 'haut']},
    {position: 'X2Y-5Z1', mouvement: ['descendre']},

    {position: 'X0Y-6Z0', mouvement: ['haut', 'droite']},                                 // -6
    {position: 'X1Y-6Z0', mouvement: ['droite', 'gauche', 'haut']},
    {position: 'X2Y-6Z0', mouvement: ['droite', 'gauche', 'haut']},
    {position: 'X3Y-6Z0', mouvement: ['gauche', 'haut']},

    // z 999999

    {position: 'X0Y-4Z999999', mouvement: ['bas']},
    {position: 'X1Y-3Z999999', mouvement: ['bas', 'haut']},
    {position: 'X8Y-3Z999999', mouvement: ['bas']},
    {position: 'X2Y-3Z999999', mouvement: ['bas']},
    {position: 'X3Y-5Z999999', mouvement: ['bas']},
    {position: 'X4Y-6Z999999', mouvement: ['bas']},
    {position: 'X5Y-6Z999999', mouvement: ['bas']},
    {position: 'X6Y-6Z999999', mouvement: ['bas']},
    {position: 'X7Y-3Z999999', mouvement: ['bas']},
    {position: 'X9Y-2Z999999', mouvement: ['bas']},

    // z 666

    {position: 'X0Y-5Z666', mouvement: ['bas']},
  ],

  tutoVillageOui: [
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
    {position: 'X-1Y-3Z0', mouvement: ['gauche', 'droite', 'haut']},
    {position: 'X-4Y-3Z0', mouvement: ['bas']},
    {position: 'X1Y-3Z0', mouvement: ['gauche', 'bas', 'droite', 'haut']},
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
    {position: 'X1Y-3Z999999', mouvement: ['bas']},
    {position: 'X2Y-3Z999999', mouvement: ['bas']},
  ],

}));

export default colisionStore;