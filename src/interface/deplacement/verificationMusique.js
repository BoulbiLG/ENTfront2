import test from '../../audio/musique/entrainant.mp3';
import chepa from '../../audio/musique/chepa.wav';
import widor from '../../audio/musique/widor.mp3';
import wagner from '../../audio/musique/2wagner.mp3';

const audioSources = {
  onche: new Audio(test),
  maisonClea: new Audio(chepa),
  combatNormal: new Audio(wagner),
};

let currentAudio = audioSources.onche;

export const verificationMusique = (storeMusique, storeParemetre) => {

    if (storeParemetre.volumeMusique > 0) {

        currentAudio.volume = storeParemetre.volumeMusique / 100;

        if (storeMusique.lecture === 0) {

            if (!currentAudio.paused) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            currentAudio = audioSources[storeMusique.courante];
            
            currentAudio.loop = true;
            currentAudio.play();
            storeMusique.modifier('lecture', 1);

        } 
    } else if (storeParemetre.volumeMusique === 0) {
        if (!currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }
};
