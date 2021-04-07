import PropTypes from 'prop-types';

export const filmType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  relatedIds: PropTypes.arrayOf(PropTypes.string),
  src: PropTypes.string.isRequired
});

export const filmsType = PropTypes.arrayOf(filmType).isRequired;

export const favoriteIdsType = PropTypes.arrayOf(PropTypes.number).isRequired;
