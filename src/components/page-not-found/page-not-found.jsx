import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

const PageNotFound = () => {
  return (
    <div className="user-page">
      <Header additionalClass="user-page__head">
        <h1 className="page-title user-page__title">Page Not Found</h1>
      </Header>

      <section>
        <Link to="/">
          <p>
            Go to main page
          </p>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default PageNotFound;
