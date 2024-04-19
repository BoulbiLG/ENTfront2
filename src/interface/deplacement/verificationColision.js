
export const verificationColision = (lieux, storeCelestin, colision, storeDeplacement) => {

    if (storeDeplacement.zoneX === 0 && storeDeplacement.zoneY === 0 && storeDeplacement.zoneZ === 0) {

        if (storeCelestin.information.tutoVillage === 'non') {

            for (let i = 0; i < colision.length; i++) {

                if (colision[i] === 'haut') {

                    colision[i] = 'desactive';

                }

            }

        }
        console.log("ouiii")

    }

    return colision;

}