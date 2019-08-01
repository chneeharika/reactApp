import React from 'react';
import { BrowserRouter as Router,
     Route,
     Switch,
     Link } from 'react-router-dom';
import LikeCounter from './LikeCounter';
import Temperature from './Temperature';
import UsingSaga from './UsingSaga';
import UsingReducer from './UsingReducer';
import Person from './Hello';
import { P2 } from './styledComponent';
import Compose from './Compose';
import M from './methodBinding';
import TestError from './Errors';
import Component1 from './FwdRef';

const Base = () => {
   
        return (
            <>
                <Router>
                    <div style={{textAlign:'center'}}>
                    <p>Pages available</p>
                    <P2> <Link to="/Like">Like Counter</Link>|</P2>
                    <P2> <Link to="/Temp">Temperature</Link> |</P2>
                    <P2> <Link to="/Data">Using reducer</Link> |</P2>
                    <P2> <Link to="/Users">Using Saga</Link> |</P2>
                    <P2> <Link to="/HOC">HOC</Link> |</P2>
                    <P2> <Link to="/Compose">Compose</Link> |</P2>
                    <P2> <Link to="/M">Method binding</Link> |</P2>
                    <P2> <Link to="/Error">ErrorBoundary</Link> |</P2>
                    <P2> <Link to="/FwdRef">Fwd ref</Link> |</P2>
                    <hr/>
                    </div>
                    <div>
                        <p style={{textAlign:'center'}}>Page begins here</p>
                        <Switch>
                            <Route path="/Temp" component={Temperature} />
                            <Route path="/Like" component={LikeCounter} />
                            <Route path="/Data" component={UsingReducer} />
                            <Route path="/Users" component={UsingSaga} />
                            <Route path="/HOC" component={Person} />
                            <Route path="/Compose" component={Compose} />
                            <Route path="/M" component={M} />
                            <Route path="/Error" component={TestError} />
                            <Route path="/FwdRef" component={Component1} />
                        </Switch>
                    </div>
                </Router>
            </>
        );
}

export default Base;
