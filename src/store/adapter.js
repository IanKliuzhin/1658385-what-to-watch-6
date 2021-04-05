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

export const adaptToClient = (film) => {
  return {
    id: film.id,
    title: film.name,
    genre: film.genre,
    year: film.released,
    bg: film.background_image,
    poster: film.poster_image,
    description: film.description,
    director: film.director,
    starring: film.starring.join(`, `),
    rating: {
      rate: film.rating,
      level: getRateLevel(film.rating),
      amount: film.scores_count
    },
    src: film.video_link,
    previewSrc: film.preview_video_link
  };
};
