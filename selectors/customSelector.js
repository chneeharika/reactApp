import {createSelector} from 'reselect';
import { get, first } from 'lodash';

const getAllUsers = state => state.users;

export const getUsersNames = createSelector (getAllUsers, users => users.map(user =>user.name));

export const getFirstName = createSelector(
  state => {console.log("selector list",state);return state.users},
  list => list.filter( item =>item.id ===1)
);
