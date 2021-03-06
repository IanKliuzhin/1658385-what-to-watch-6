import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';
import {useHistory} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

const SignIn = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value
    }));
  };

  const history = useHistory();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      history.push(`/`);
    }
  }, [authorizationStatus]);

  return (
    <div className="user-page">
      <Header additionalClass="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={emailRef} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
