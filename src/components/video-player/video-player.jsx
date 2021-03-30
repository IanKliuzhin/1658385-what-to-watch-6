import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({isPlaying, poster, src}) => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [isPlaying]);
  return (
    <video ref={videoRef} src={isPlaying ? src : ``} poster={poster} height={175} width={280} muted />
  );
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default VideoPlayer;
