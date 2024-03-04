import baseStore from "../variableGlobal/base/baseStore";

export const analysePositionBase = (x, y, z) => {

    const storeBase = baseStore();

    var baseCourante = null;

    for (let i = 0; i < storeBase.base.length; i++) {
        const base = storeBase.base[i];
        if (x == base.zoneX && y == base.zoneY && z == base.zoneZ) {
            baseCourante = base;
        }
    }

    return baseCourante;

}

export const analyseIdBase = (x, y, z) => {

    const storeBase = baseStore();

    var idBase = null;

    for (let i = 0; i < storeBase.base.length; i++) {
        const base = storeBase.base[i];
        if (x == base.zoneX && y == base.zoneY && z == base.zoneZ) {
            idBase = base.idBase;
        }
    }

    return idBase;

}