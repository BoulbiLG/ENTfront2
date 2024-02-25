import musiqueStore from "../../variableGlobal/audio/musiqueStore";

import test from '../../audio/musique/entrainant.mp3'

export const verificationMusique = () => {
    const storeMusique = musiqueStore();

    if (storeMusique.courante === 'onche') {
        const audio = new Audio(test);

        document.addEventListener('click', () => {
            audio.loop = true;
            audio.play();
        }, { once: true });
    }
};
