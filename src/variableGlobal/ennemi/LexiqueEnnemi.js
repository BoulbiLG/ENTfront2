
import normalNain from '../../asset/ennemi/nainJardin/normal.png';import iconeNain from '../../asset/ennemi/nainJardin/icone.png';
import normalChatBois from '../../asset/ennemi/chat des bois/normal.png';import iconeChatBois from '../../asset/ennemi/chat des bois/icone.png';
import normalFouErrant from '../../asset/ennemi/fou errant/normal.png';import iconeFouErrant from '../../asset/ennemi/fou errant/icone.png';
import normalPhilliproute from '../../asset/ennemi/philliproute/normal.png';import iconePhilliproute from '../../asset/ennemi/philliproute/icone.png';
import normalGaimon from '../../asset/ennemi/gaimon/normal.png';import iconeGaimon from '../../asset/ennemi/gaimon/icone.png';
import normalSerponche from '../../asset/ennemi/serponche/normal.png';import iconeSerponche from '../../asset/ennemi/serponche/icone.png';
import normalTareDesBois from '../../asset/ennemi/taré des bois/normal.png';import iconeTareDesBois from '../../asset/ennemi/taré des bois/icone.png';
import normaltuberculonche from '../../asset/ennemi/tuberculonche/normal.png';import iconeTuberculonche from '../../asset/ennemi/tuberculonche/icone.png';
import { lexiqueOffensive } from "../item/magie/lexiqueOffensive";
import { lexiqueSoin } from "../item/magie/lexiqueSoin";
import { lexiqueStatAugmente } from "../item/magie/lexiqueStatAugmente";
import { lexiqueStatBaisse } from "../item/magie/lexiqueStatBaisse";
import { lexiqueConsomable } from '../item/lexiqueConsomable';
import { lexiqueDivers } from '../item/lexiqueDivers';

export const lexiqueEnnemi = {

    nainJardin: {
      niveauMax: 3,
      niveauMin: 1,
      type: 'nainJardin',
      nom: "Nain de Jardin",
      imgNormal: normalNain,
      imgIcone: iconeNain,
      x: 0,
      y: 0,

      vieMax: 80,
      vie: 80,
      niveau: 15,
      attaque: 15,
      defense: 3,
      vitesse: 11,
      courage: 5,             // augmente le taux de coup critique, min = 5
      magieMax: 100,
      magie: 100,
      testo: 0,

      joie: 50,
      colere: 0,
      tristesse: 0,
      confiance: 0,
      peur: 0,
      empathie: 0,

      magieTout: {

          proba1: {
            min: 1,
            max: 10,
          },
      
          lexique: [
      
            // pistolet a pisse
            {
              id: lexiqueOffensive.pistoletPisse.id, 
              nom: lexiqueOffensive.pistoletPisse.nom, 
              type: lexiqueOffensive.pistoletPisse.type,
              imgIcone: lexiqueOffensive.pistoletPisse.imgIcone,
              consequence: lexiqueOffensive.pistoletPisse.consequence,
              status: lexiqueOffensive.pistoletPisse.status,
              tour: lexiqueOffensive.pistoletPisse.tour,
              action: lexiqueOffensive.pistoletPisse.action,
              niveau: lexiqueOffensive.pistoletPisse.niveau, 
              cout: lexiqueOffensive.pistoletPisse.cout,
            },
      
            // nofap
            {
              id: lexiqueStatAugmente.nofap.id, 
              nom: lexiqueStatAugmente.nofap.nom, 
              type: lexiqueStatAugmente.nofap.type,
              imgIcone: lexiqueStatAugmente.nofap.imgIcone,
              consequence: lexiqueStatAugmente.nofap.consequence,
              status: lexiqueStatAugmente.nofap.status,
              tour: lexiqueStatAugmente.nofap.tour,
              action: lexiqueStatAugmente.nofap.action, 
              niveau: lexiqueStatAugmente.nofap.niveau, 
              consequence: lexiqueStatAugmente.nofap.consequence, 
              cout: lexiqueStatAugmente.nofap.cout
            },
      
            // exibitionisme
            {
              id: lexiqueStatBaisse.exibitionisme.id, 
              nom: lexiqueStatBaisse.exibitionisme.nom, 
              action: lexiqueStatBaisse.exibitionisme.action, 
              type: lexiqueStatBaisse.exibitionisme.type, 
              niveau: lexiqueStatBaisse.exibitionisme.niveau, 
              cout: lexiqueStatBaisse.exibitionisme.cout,
              imgIcone: lexiqueStatBaisse.exibitionisme.imgIcone,
              consequence: lexiqueStatBaisse.exibitionisme.consequence,
              status: lexiqueStatBaisse.exibitionisme.status,
              tour: lexiqueStatBaisse.exibitionisme.tour,
            },
      
            // benediction zoulman
            {
              id: lexiqueSoin.benedictionZoulman.id, 
              nom: lexiqueSoin.benedictionZoulman.nom, 
              action: lexiqueSoin.benedictionZoulman.action, 
              type: lexiqueSoin.benedictionZoulman.type, 
              niveau: lexiqueSoin.benedictionZoulman.niveau, 
              cout: lexiqueSoin.benedictionZoulman.cout,
              imgIcone: lexiqueSoin.benedictionZoulman.imgIcone,
              consequence: lexiqueSoin.benedictionZoulman.consequence,
              status: lexiqueSoin.benedictionZoulman.status,
              tour: lexiqueSoin.benedictionZoulman.tour,
              
            },
      
            // benediction zoulman
            {
              id: lexiqueSoin.heinekenSecours.id, 
              nom: lexiqueSoin.heinekenSecours.nom, 
              action: lexiqueSoin.heinekenSecours.action, 
              type: lexiqueSoin.heinekenSecours.type, 
              niveau: lexiqueSoin.heinekenSecours.niveau, 
              cout: lexiqueSoin.heinekenSecours.cout,
              imgIcone: lexiqueSoin.heinekenSecours.imgIcone,
              consequence: lexiqueSoin.heinekenSecours.consequence,
              status: lexiqueSoin.heinekenSecours.status,
              tour: lexiqueSoin.heinekenSecours.tour,
            },
            
          ],
      
      },
      itemDropable: [
          {
            tauxApparition: 80,
            id: lexiqueConsomable.pomme.id,
            img: lexiqueConsomable.pomme.img,
            quantite: {
              min: 1,
              max: 5,
            },
            action: lexiqueConsomable.pomme.action,
            important: lexiqueConsomable.pomme.important,
            nom: lexiqueConsomable.pomme.nom,
            description: lexiqueConsomable.pomme.description,
            valeur: lexiqueConsomable.pomme.valeur,
            type: lexiqueConsomable.pomme.type,
            poid: lexiqueConsomable.pomme.poid,
            cible: lexiqueConsomable.pomme.cible,
          }
      ],
    },

    chatBois: {
      niveauMax: 3,
      niveauMin: 1,
      type: 'chatBois',
      nom: "Chat des bois",
      imgNormal: normalChatBois,
      imgIcone: iconeChatBois,
      x: 0,
      y: 0,

      vieMax: 55,
      vie: 55,
      niveau: 15,
      attaque: 11,
      defense: 1,
      vitesse: 11,
      courage: 1,             // augmente le taux de coup critique, min = 5
      magieMax: 50,
      magie: 50,
      testo: 0,

      joie: 0,
      colere: 100,
      tristesse: 0,
      confiance: 0,
      peur: 0,
      empathie: 0,

      magieTout: {

          proba1: {
            min: 1,
            max: 10,
          },
      
          lexique: [
      
            // pistolet a pisse
            {
              id: lexiqueOffensive.pistoletPisse.id, 
              nom: lexiqueOffensive.pistoletPisse.nom, 
              type: lexiqueOffensive.pistoletPisse.type,
              imgIcone: lexiqueOffensive.pistoletPisse.imgIcone,
              consequence: lexiqueOffensive.pistoletPisse.consequence,
              status: lexiqueOffensive.pistoletPisse.status,
              tour: lexiqueOffensive.pistoletPisse.tour,
              action: lexiqueOffensive.pistoletPisse.action,
              niveau: lexiqueOffensive.pistoletPisse.niveau, 
              cout: lexiqueOffensive.pistoletPisse.cout,
            },
      
            // nofap
            {
              id: lexiqueStatAugmente.nofap.id, 
              nom: lexiqueStatAugmente.nofap.nom, 
              type: lexiqueStatAugmente.nofap.type,
              imgIcone: lexiqueStatAugmente.nofap.imgIcone,
              consequence: lexiqueStatAugmente.nofap.consequence,
              status: lexiqueStatAugmente.nofap.status,
              tour: lexiqueStatAugmente.nofap.tour,
              action: lexiqueStatAugmente.nofap.action, 
              niveau: lexiqueStatAugmente.nofap.niveau, 
              consequence: lexiqueStatAugmente.nofap.consequence, 
              cout: lexiqueStatAugmente.nofap.cout
            },
      
            // exibitionisme
            {
              id: lexiqueStatBaisse.exibitionisme.id, 
              nom: lexiqueStatBaisse.exibitionisme.nom, 
              action: lexiqueStatBaisse.exibitionisme.action, 
              type: lexiqueStatBaisse.exibitionisme.type, 
              niveau: lexiqueStatBaisse.exibitionisme.niveau, 
              cout: lexiqueStatBaisse.exibitionisme.cout,
              imgIcone: lexiqueStatBaisse.exibitionisme.imgIcone,
              consequence: lexiqueStatBaisse.exibitionisme.consequence,
              status: lexiqueStatBaisse.exibitionisme.status,
              tour: lexiqueStatBaisse.exibitionisme.tour,
            },
      
            // benediction zoulman
            {
              id: lexiqueSoin.benedictionZoulman.id, 
              nom: lexiqueSoin.benedictionZoulman.nom, 
              action: lexiqueSoin.benedictionZoulman.action, 
              type: lexiqueSoin.benedictionZoulman.type, 
              niveau: lexiqueSoin.benedictionZoulman.niveau, 
              cout: lexiqueSoin.benedictionZoulman.cout,
              imgIcone: lexiqueSoin.benedictionZoulman.imgIcone,
              consequence: lexiqueSoin.benedictionZoulman.consequence,
              status: lexiqueSoin.benedictionZoulman.status,
              tour: lexiqueSoin.benedictionZoulman.tour,
              
            },
      
            // benediction zoulman
            {
              id: lexiqueSoin.heinekenSecours.id, 
              nom: lexiqueSoin.heinekenSecours.nom, 
              action: lexiqueSoin.heinekenSecours.action, 
              type: lexiqueSoin.heinekenSecours.type, 
              niveau: lexiqueSoin.heinekenSecours.niveau, 
              cout: lexiqueSoin.heinekenSecours.cout,
              imgIcone: lexiqueSoin.heinekenSecours.imgIcone,
              consequence: lexiqueSoin.heinekenSecours.consequence,
              status: lexiqueSoin.heinekenSecours.status,
              tour: lexiqueSoin.heinekenSecours.tour,
            },
            
          ],
      
      },
      itemDropable: [
          {
            tauxApparition: 80,
            id: lexiqueConsomable.caca.id,
            img: lexiqueConsomable.caca.img,
            quantite: {
              min: 1,
              max: 3,
            },
            action: lexiqueConsomable.caca.action,
            important: lexiqueConsomable.caca.important,
            nom: lexiqueConsomable.caca.nom,
            description: lexiqueConsomable.caca.description,
            valeur: lexiqueConsomable.caca.valeur,
            type: lexiqueConsomable.caca.type,
            poid: lexiqueConsomable.caca.poid,
            cible: lexiqueConsomable.caca.cible,
          }
      ],
    },

    fouErrant: {
      niveauMax: 3,
      niveauMin: 1,
      type: 'fouErrant',
      nom: "Fou solitaire",
      imgNormal: normalFouErrant,
      imgIcone: iconeFouErrant,
      x: 0,
      y: 0,

      vieMax: 68,
      vie: 68,
      niveau: 15,
      attaque: 9,
      defense: 9,
      vitesse: 11,
      courage: 4,             // augmente le taux de coup critique, min = 5
      magieMax: 500,
      magie: 500,
      testo: 0,

      joie: 100,
      colere: 0,
      tristesse: 0,
      confiance: 0,
      peur: 0,
      empathie: 0,

      magieTout: {

          proba1: {
            min: 1,
            max: 10,
          },
      
          lexique: [],
      
      },
      itemDropable: [
          {
            tauxApparition: 80,
            id: lexiqueConsomable.pomme.id,
            img: lexiqueConsomable.pomme.img,
            quantite: {
              min: 1,
              max: 5,
            },
            action: lexiqueConsomable.pomme.action,
            important: lexiqueConsomable.pomme.important,
            nom: lexiqueConsomable.pomme.nom,
            description: lexiqueConsomable.pomme.description,
            valeur: lexiqueConsomable.pomme.valeur,
            type: lexiqueConsomable.pomme.type,
            poid: lexiqueConsomable.pomme.poid,
            cible: lexiqueConsomable.pomme.cible,
          }
      ],
    },

    philliproute: {
      niveauMax: 3,
      niveauMin: 1,
      type: 'philliproute',
      nom: "Philliproute",
      imgNormal: normalPhilliproute,
      imgIcone: iconePhilliproute,
      x: 0,
      y: 0,

      vieMax: 112,
      vie: 112,
      niveau: 15,
      attaque: 18,
      defense: 1,
      vitesse: 11,
      courage: 5,             // augmente le taux de coup critique, min = 5
      magieMax: 90,
      magie: 90,
      testo: 0,

      joie: 0,
      colere: 91,
      tristesse: 0,
      confiance: 0,
      peur: 10,
      empathie: 0,

      magieTout: {

          proba1: {
            min: 1,
            max: 10,
          },
      
          lexique: [],
      
      },
      itemDropable: [
          {
            tauxApparition: 80,
            id: lexiqueConsomable.pomme.id,
            img: lexiqueConsomable.pomme.img,
            quantite: {
              min: 1,
              max: 5,
            },
            action: lexiqueConsomable.pomme.action,
            important: lexiqueConsomable.pomme.important,
            nom: lexiqueConsomable.pomme.nom,
            description: lexiqueConsomable.pomme.description,
            valeur: lexiqueConsomable.pomme.valeur,
            type: lexiqueConsomable.pomme.type,
            poid: lexiqueConsomable.pomme.poid,
            cible: lexiqueConsomable.pomme.cible,
          }
      ],
    },

    gaimon: {
      niveauMax: 3,
      niveauMin: 1,
      type: 'gaimon',
      nom: "Gaimon",
      imgNormal: normalGaimon,
      imgIcone: iconeGaimon,
      x: 0,
      y: 0,

      vieMax: 112,
      vie: 112,
      niveau: 15,
      attaque: 5,
      defense: 10,
      vitesse: 11,
      courage: 5,             // augmente le taux de coup critique, min = 5
      magieMax: 10,
      magie: 10,
      testo: 0,

      joie: 0,
      colere: 0,
      tristesse: 0,
      confiance: 0,
      peur: 0,
      empathie: 0,

      magieTout: {

          proba1: {
            min: 1,
            max: 10,
          },
      
          lexique: [],
      
      },
      itemDropable: [
          {
            tauxApparition: 80,
            id: lexiqueConsomable.pomme.id,
            img: lexiqueConsomable.pomme.img,
            quantite: {
              min: 1,
              max: 5,
            },
            action: lexiqueConsomable.pomme.action,
            important: lexiqueConsomable.pomme.important,
            nom: lexiqueConsomable.pomme.nom,
            description: lexiqueConsomable.pomme.description,
            valeur: lexiqueConsomable.pomme.valeur,
            type: lexiqueConsomable.pomme.type,
            poid: lexiqueConsomable.pomme.poid,
            cible: lexiqueConsomable.pomme.cible,
          }
      ],
    },
    
    serponche: {
      niveauMax: 3,
      niveauMin: 1,
      type: 'serponche',
      nom: "Serponche",
      imgNormal: normalSerponche,
      imgIcone: iconeSerponche,
      x: 0,
      y: 0,

      vieMax: 75,
      vie: 75,
      niveau: 15,
      attaque: 20,
      defense: 1,
      vitesse: 11,
      courage: 3,             // augmente le taux de coup critique, min = 5
      magieMax: 35,
      magie: 35,
      testo: 0,

      joie: 0,
      colere: 0,
      tristesse: 0,
      confiance: 0,
      peur: 8,
      empathie: 0,

      magieTout: {

          proba1: {
            min: 1,
            max: 10,
          },
      
          lexique: [],
      
      },
      itemDropable: [
          {
            tauxApparition: 80,
            id: lexiqueConsomable.pomme.id,
            img: lexiqueConsomable.pomme.img,
            quantite: {
              min: 1,
              max: 5,
            },
            action: lexiqueConsomable.pomme.action,
            important: lexiqueConsomable.pomme.important,
            nom: lexiqueConsomable.pomme.nom,
            description: lexiqueConsomable.pomme.description,
            valeur: lexiqueConsomable.pomme.valeur,
            type: lexiqueConsomable.pomme.type,
            poid: lexiqueConsomable.pomme.poid,
            cible: lexiqueConsomable.pomme.cible,
          }
      ],
    },

    tareBois: {
      niveauMax: 3,
      niveauMin: 1,
      type: 'tareBois',
      nom: "Taré des bois",
      imgNormal: normalTareDesBois,
      imgIcone: iconeTareDesBois,
      x: 0,
      y: 0,

      vieMax: 152,
      vie: 152,
      niveau: 15,
      attaque: 13,
      defense: 10,
      vitesse: 11,
      courage: 5,             // augmente le taux de coup critique, min = 5
      magieMax: 130,
      magie: 130,
      testo: 0,

      joie: 100,
      colere: 0,
      tristesse: 0,
      confiance: 0,
      peur: 8,
      empathie: 0,

      magieTout: {

          proba1: {
            min: 1,
            max: 10,
          },
      
          lexique: [],
      
      },
      itemDropable: [
          {
            tauxApparition: 80,
            id: lexiqueDivers.bite.id,
            img: lexiqueDivers.bite.img,
            quantite: {
              min: 1,
              max: 1,
            },
            action: lexiqueDivers.bite.action,
            important: lexiqueDivers.bite.important,
            nom: lexiqueDivers.bite.nom,
            description: lexiqueDivers.bite.description,
            valeur: lexiqueDivers.bite.valeur,
            type: lexiqueDivers.bite.type,
            poid: lexiqueDivers.bite.poid,
            cible: lexiqueDivers.bite.cible,
          },
          {
            tauxApparition: 20,
            id: lexiqueConsomable.bouteillepisse.id,
            img: lexiqueConsomable.bouteillepisse.img,
            quantite: {
              min: 1,
              max: 2,
            },
            action: lexiqueConsomable.bouteillepisse.action,
            important: lexiqueConsomable.bouteillepisse.important,
            nom: lexiqueConsomable.bouteillepisse.nom,
            description: lexiqueConsomable.bouteillepisse.description,
            valeur: lexiqueConsomable.bouteillepisse.valeur,
            type: lexiqueConsomable.bouteillepisse.type,
            poid: lexiqueConsomable.bouteillepisse.poid,
            cible: lexiqueConsomable.bouteillepisse.cible,
          }
      ],
    },

    tuberculonche: {
      niveauMax: 3,
      niveauMin: 1,
      type: 'tuberculonche',
      nom: "Tuberculonche",
      imgNormal: normaltuberculonche,
      imgIcone: iconeTuberculonche,
      x: 0,
      y: 0,

      vieMax: 60,
      vie: 60,
      niveau: 15,
      attaque: 12,
      defense: 6,
      vitesse: 11,
      courage: 5,             // augmente le taux de coup critique, min = 5
      magieMax: 130,
      magie: 130,
      testo: 0,

      joie: 100,
      colere: 100,
      tristesse: 100,
      confiance: 100,
      peur: 100,
      empathie: 100,

      magieTout: {

          proba1: {
            min: 1,
            max: 10,
          },
      
          lexique: [],
      
      },
      itemDropable: [
          {
            tauxApparition: 80,
            id: lexiqueConsomable.pomme.id,
            img: lexiqueConsomable.pomme.img,
            quantite: {
              min: 1,
              max: 5,
            },
            action: lexiqueConsomable.pomme.action,
            important: lexiqueConsomable.pomme.important,
            nom: lexiqueConsomable.pomme.nom,
            description: lexiqueConsomable.pomme.description,
            valeur: lexiqueConsomable.pomme.valeur,
            type: lexiqueConsomable.pomme.type,
            poid: lexiqueConsomable.pomme.poid,
            cible: lexiqueConsomable.pomme.cible,
          }
      ],
    },

}