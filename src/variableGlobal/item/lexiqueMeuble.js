
import drapeauOnche from '../../asset/item/meuble/drapeauOnche.png';
import drapeauOncheItem from '../../asset/item/meuble/drapeauOncheItem.png';
import tente from '../../asset/item/meuble/tente.png';
import tenteItem from '../../asset/item/meuble/tenteItem.png';

export const lexiqueMeuble = {
    
    drapeau: {
        type: 'drapeau',
        nom: 'Drapeau onchois',
        img: drapeauOnche,
        imgItem: drapeauOncheItem,
        description: "Un drapeau classique à l'éfigie du village de Onche. Element prioritaire à placer pour créer une base.",
        valeur: 298,
        action: 1,
        poid: 9,
        protection: 1,
        piege: 0,
    },
    tente: {
        type: 'tente',
        nom: 'Tente Quechua',
        img: tente,
        imgItem: tenteItem,
        description: "Un drapeau Quechua d'une qualité incassable. Permet de vous reposer pour soigner votre équipe. Mais attention au horde.",
        valeur: 731,
        action: 1,
        poid: 4,
        protection: 1,
        piege: 0,
    },
    
}