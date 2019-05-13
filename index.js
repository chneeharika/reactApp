import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Base from './components/Base';
// import Temperature from './components/Temperature';
// import Test from './components/Test';
// import {Hello as Hi} from './components/Hello';
// import {PropChecking as Check} from './components/PropChecking';
// import LikeCounter from './components/LikeCounter';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import reducer from './reducer/reducer';
import createSagaMiddleware from 'redux-saga';
import {fetchUsersData} from './reducer/sagas';
import * as serviceWorker from './serviceWorker';


const sagaMiddleware = createSagaMiddleware();
// , applyMiddleware(sagaMiddleware)
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchUsersData);
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<React.Fragment>
				<Base />
			</React.Fragment>	
		</Provider>
	</BrowserRouter>, document.getElementById('root'));


/*<Hi name='Temperature'/>
	<Check><p>Hi</p><span>Bye</span></Check>
	<Temperature />
	*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
