import React, {useState, useEffect} from 'react';
import {filmType} from '../../types';
import {useHistory} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

const SmallMovieCard = ({film}) => {
  const {id, title, bg, previewSrc} = film;
  const history = useHistory();
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const handleMouseEnter = () => {
    setTimer(window.setTimeout(() => {
      setIsPreviewPlaying(true);
    }, 1000));
  };
  const handleMouseLeave = () => {
    window.clearTimeout(timer);
    setIsPreviewPlaying(false);
  };
  useEffect(() => {
    return () => {
      window.clearTimeout(timer);
    };
  }, [timer]);

  return (
    <article className="small-movie-card catalog__movies-card" onClick={() => history.push(`/films/${id}`)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-movie-card__image">
        <VideoPlayer poster={bg} src={previewSrc} isPlaying={isPreviewPlaying} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={`/films/${id}`}>{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: filmType,
};

export default SmallMovieCard;
