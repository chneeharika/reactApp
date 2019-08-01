import { combineReducers } from 'redux';
const intialState = {
	counter:0,
	list:["Hello!!!","Welcome","to","React"],
	data:"",
	users:[]
}
// export const reducer = (state = 0, action) => {
	
// 	switch(action.type) {
// 		case 'INC': return state+1;
// 		case 'DEC': return  state -1;
// 		case 'DECR': return  state -action.id;
		
// 	}
// 	return state;
// }
export const reducer1 = (state = intialState, action) => {
	switch(action.type) {
		case 'INC': return {...state, counter: state.counter+1};
		case 'DEC': return  {...state, counter: state.counter -1};
		case 'DECR': return  {...state, counter: state.counter -action.id};
		// default: return state;
	}
	return state;
}
export const reducer2 = (state = intialState, action) => {
	
	switch(action.type) {
		case 'GET': console.log(state.list,action.id);return {...state, data:state.list[action.id]};
		case 'GETALL': console.log("reducer",action.response);return {...state, users:action.response};
		case 'GETONE': return {...state, data:state.list[action.id]};
		// default: return state;
	}
	return state;
}

const reducer3 = (state = intialState, action) => {
	
	switch(action.type) {
		case 'INC': return {...state, counter: state.counter+1};
		case 'DEC': return  {...state, counter: state.counter -1};
		case 'DECR': return  {...state, counter: state.counter -action.id};
		case 'GET': console.log(state.list,action.id);return {...state, data:state.list[action.id]};
		case 'GETALL': console.log("reducer",action.response);return {...state, users:action.response};
		case 'GETONE': return {...state, data:state.list[action.id]};
		default: return state;
	}
	// return state;
}
const reducer = combineReducers({	
	reducer1,
	reducer2
  });
export default reducer;

