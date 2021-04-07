import React from 'react';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {useHistory} from 'react-router-dom';

const UserBlock = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const history = useHistory();
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

export default UserBlock;
