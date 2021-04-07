import PropTypes from 'prop-types';

export const commentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
});

export const filmType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  relatedIds: PropTypes.arrayOf(PropTypes.string),
  src: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(commentType)
});

export const filmsType = PropTypes.arrayOf(filmType).isRequired;

export const favoriteIdsType = PropTypes.arrayOf(PropTypes.number).isRequired;
