import create from 'zustand';

const colisionStore = create((set) => ({

  foretENT: [
    {position: 'X8Y1Z0', mouvement: ['gauche']},      // y 1
    {position: 'X7Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X6Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X5Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X4Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X3Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X2Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X1Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X0Y1Z0', mouvement: ['droite','gauche', 'bas']},
    {position: 'X-1Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-2Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-3Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-4Y1Z0', mouvement: ['droite','gauche', 'bas']},
    {position: 'X-5Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-6Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-7Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-8Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-9Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-10Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-11Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-12Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-13Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-14Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-15Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-16Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-17Y1Z0', mouvement: ['droite','gauche']},
    {position: 'X-18Y1Z0', mouvement: ['droite']},
    {position: 'X-4Y0Z0', mouvement: ['haut','bas']},      // y 0
    {position: 'X-4Y-1Z0', mouvement: ['haut','descendre']},      // y -1
  ],

  tutoVillageNon: [
    {position: 'X0Y0Z0', mouvement: ['bas', 'haut']},
    {position: 'X0Y-1Z0', mouvement: ['haut', 'gauche', 'droite', 'bas']},        // -1
    {position: 'X-1Y-1Z0', mouvement: ['droite', 'bas', 'haut']},
    {position: 'X1Y-1Z-1', mouvement: ['gauche']},
    {position: 'X1Y-1Z-1', mouvement: ['monter']},
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
    {position: 'X-2Y-4Z0', mouvement: ['gauche', 'droite', 'haut']},
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
    {position: 'X10Y-4Z999999', mouvement: ['bas']},
    {position: 'X11Y-1Z999999', mouvement: ['bas']},

    // z 666

    {position: 'X0Y-5Z666', mouvement: ['bas']},
  ],

  tutoVillageOui: [
    {position: 'X0Y0Z0', mouvement: ['haut', 'bas']},
    {position: 'X0Y-1Z0', mouvement: ['haut', 'gauche', 'droite', 'bas']},        // -1
    {position: 'X-1Y-1Z0', mouvement: ['droite', 'bas', 'haut']},
    {position: 'X1Y-1Z-1', mouvement: ['gauche', 'monter']},
    {position: 'X-4Y-1Z0', mouvement: ['descendre']},
    {position: 'X-4Y-1Z-1', mouvement: ['droite', 'monter']},
    {position: 'X1Y-1Z-1', mouvement: ['monter']},
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
    {position: 'X-2Y-4Z0', mouvement: ['gauche', 'droite', 'haut']},
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
    {position: 'X10Y-4Z999999', mouvement: ['bas']},
    {position: 'X11Y-1Z999999', mouvement: ['bas']},

    // z 666

    {position: 'X0Y-5Z666', mouvement: ['bas']},
  ],

}));

export default colisionStore;