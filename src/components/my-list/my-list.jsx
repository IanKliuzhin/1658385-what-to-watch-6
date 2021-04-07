import React from 'react';
import MoviesList from '../movies-list/movies-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import {useSelector} from 'react-redux';

const MyList = () => {
  const {films} = useSelector((state) => state.CATALOG);
  const {favoriteIds} = useSelector((state) => state.USER);
  const favorites = favoriteIds.map((id) => films.find((film) => film.id === id));
  return (
    <div className="user-page">
      <Header additionalClass="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <MoviesList films={favorites} />

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyList;
