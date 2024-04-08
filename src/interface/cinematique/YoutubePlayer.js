import React, { useEffect, useRef } from 'react';

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Chargement de l'API YouTube Player
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Fonction appelée lorsque l'API est prête
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        videoId: videoId,
        events: {
          'onReady': onPlayerReady
        }
      });
    }
  }, [videoId]);

  const onPlayerReady = (event) => {
    // Lecture automatique de la vidéo
    event.target.playVideo();
  };

  return (
    <div>
      <div ref={playerRef}></div>
    </div>
  );
};

export default YouTubePlayer;
