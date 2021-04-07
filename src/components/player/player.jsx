import React, {useRef} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Player = () => {
  const {films} = useSelector((state) => state.CATALOG);
  const ref = useRef(null);
  const history = useHistory();
  const {id} = useParams();
  const film = films.length ? films.find((filmToCheck) => String(filmToCheck.id) === id) : {};
  const {title, src, poster, runTime} = film;
  return (
    <div className="player">
      <video ref={ref} src={src} className="player__video" poster={poster}></video>

      <button type="button" className="player__exit" onClick={() => history.goBack()}>Exit</button>

      {ref.current &&
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `${ref.current.currentTime / runTime * 100 }%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{ref.current.currentTime}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{title}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Player;
