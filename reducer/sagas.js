import {call, put} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch'

const res ="";
function fetchUser () {
	return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(json => json)
    
}
export function* fetchUsers () {
	console.log("saga2");
	const response = yield call(fetchUser);
	console.log("response",response);
	yield put({type:'GETALL',response});
}
export function* fetchUsersData () {
	console.log("saga1");
	yield takeEvery('GETUSERS', fetchUsers);
}
