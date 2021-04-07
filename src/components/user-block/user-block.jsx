import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';

const UserBlock = ({authorizationStatus}) => {
  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <div className="user-block__avatar" onClick={() => history.push(`/mylist`)}>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
        :
        <a href={`/login`} className="user-block__link">Sign in</a>
      }
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps, null)(UserBlock);
