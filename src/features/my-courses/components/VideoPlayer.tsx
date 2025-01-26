import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  options: videojs.PlayerConfiguration;
}

const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
};

export const VideoPlayer = ({ options }: VideoPlayerProps) => {
  const videoNode = React.useRef<HTMLVideoElement>();
  const player = React.useRef<videojs.Player>();

  React.useEffect(() => {
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options,
    }).ready(function () {
      // console.log('onPlayerReady', this);
    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return <video ref={videoNode} className="video-js" />;
};

export default VideoPlayer;
