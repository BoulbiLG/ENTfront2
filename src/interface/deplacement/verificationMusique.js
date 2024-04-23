import test from '../../audio/musique/entrainant.mp3';
import chepa from '../../audio/musique/chepa.wav';
import widor from '../../audio/musique/widor.mp3';
import combatNormal from '../../audio/musique/combatNormal.mp3';
import auberge from '../../audio/musique/auberge.mp3';
import lidl from '../../audio/musique/lidl.mp3';
import espoir from '../../audio/musique/espoir.mp3';
import franckDubosc from '../../audio/musique/franckDubosc.mp3';
import goulag from '../../audio/musique/goulag.mp3';
import foretENT from '../../audio/musique/foretENT.mp3';
import combatForet from '../../audio/musique/combat chepa.mp3';
import douceFrance from '../../audio/musique/douceFrance.mp3';
import espagne from '../../audio/musique/2espagne.mp3';

const audioSources = {
  onche: new Audio(test),
  maisonClea: new Audio(chepa),
  combatNormal: new Audio(combatNormal),
  auberge: new Audio(auberge),
  lidl: new Audio(lidl),
  victoireNormal: new Audio(espoir),
  franck: new Audio(franckDubosc),
  goulag: new Audio(goulag),
  foretENT: new Audio(foretENT),
  combatForet: new Audio(espagne),
  gaulois: new Audio(douceFrance),
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
