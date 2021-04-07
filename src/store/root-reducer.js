import {combineReducers} from 'redux';
import {appState} from './app-state/app-state';
import {catalog} from './catalog/catalog';
import {user} from './user/user';

export const NameSpace = {
  APP_STATE: `APP_STATE`,
  CATALOG: `CATALOG`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.APP_STATE]: appState,
  [NameSpace.CATALOG]: catalog,
  [NameSpace.USER]: user,
});
