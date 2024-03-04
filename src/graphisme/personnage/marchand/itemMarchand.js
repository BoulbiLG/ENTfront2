
import { lexiqueConsomable } from "../../../variableGlobal/item/lexiqueConsomable";
import { lexiqueMeuble } from "../../../variableGlobal/item/lexiqueMeuble";

const yMeuble = 100;

export const item = [
    {equipe: 0, action: lexiqueConsomable.pomme.action, important: lexiqueConsomable.pomme.important, id: lexiqueConsomable.pomme.id,
        nom: lexiqueConsomable.pomme.nom, quantite: 1, img: lexiqueConsomable.pomme.img, description: lexiqueConsomable.pomme.description, 
        valeur: lexiqueConsomable.pomme.valeur, type: lexiqueConsomable.pomme.type, poid: lexiqueConsomable.pomme.poid},
    {equipe: 0, action: lexiqueConsomable.coca.action, important: lexiqueConsomable.coca.important, id: lexiqueConsomable.coca.id,
        nom: lexiqueConsomable.coca.nom, quantite: 2, img: lexiqueConsomable.coca.img, description: lexiqueConsomable.coca.description, 
        valeur: lexiqueConsomable.coca.valeur, type: lexiqueConsomable.coca.type, poid: lexiqueConsomable.coca.poid},
]

export const meuble = [
    {
        type: lexiqueMeuble.drapeau.type,
        nom: lexiqueMeuble.drapeau.nom,
        img: lexiqueMeuble.drapeau.img,
        imgItem: lexiqueMeuble.drapeau.imgItem,
        description: lexiqueMeuble.drapeau.description,
        valeur: lexiqueMeuble.drapeau.valeur,
        poid: lexiqueMeuble.drapeau.poid,
        action: lexiqueMeuble.drapeau.action, 
        id: 1,
        x: 500,
        y: yMeuble,
        protection: lexiqueMeuble.drapeau.action,
        piege: lexiqueMeuble.drapeau.action,
        quantite: 1,
      },
      {
        type: lexiqueMeuble.tente.type,
        nom: lexiqueMeuble.tente.nom,
        img: lexiqueMeuble.tente.img,
        imgItem: lexiqueMeuble.tente.imgItem,
        description: lexiqueMeuble.tente.description,
        valeur: lexiqueMeuble.tente.valeur,
        poid: lexiqueMeuble.tente.poid,
        action: lexiqueMeuble.tente.action, 
        id: 2,
        x: 500,
        y: yMeuble,
        protection: lexiqueMeuble.tente.action,
        piege: lexiqueMeuble.tente.action,
        quantite: 1,
      },
]