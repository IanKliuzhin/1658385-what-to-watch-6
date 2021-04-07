const getRateLevel = (rate) => {
  if (rate === 10) {
    return `Awesome`;
  } else if (rate > 8) {
    return `Very good`;
  } else if (rate > 5) {
    return `Good`;
  } else if (rate > 3) {
    return `Normal`;
  }
  return `Bad`;
};

const MUNUTES_IN_HOUR = 60;
const converRunTime = (runTimeInMinutes) => {
  const hours = Math.floor(runTimeInMinutes / MUNUTES_IN_HOUR);
  const minutes = runTimeInMinutes - hours * MUNUTES_IN_HOUR;
  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ``}`;
};

export const adaptToClient = (film) => {
  return {
    id: film.id,
    title: film.name,
    genre: film.genre,
    released: film.released,
    bg: film.background_image,
    poster: film.poster_image,
    description: film.description,
    director: film.director,
    starring: film.starring,
    runTime: converRunTime(film.run_time),
    rating: {
      rate: film.rating,
      level: getRateLevel(film.rating),
      amount: film.scores_count
    },
    src: film.video_link,
    previewSrc: film.preview_video_link
  };
};
