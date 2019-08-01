import React, {Component} from 'react';
import {compose, defaultProps} from 'recompose';
import { withRouter } from 'react-router';


const UseCompose = inputs => WrappedComponent => props => {
    inputs.name = inputs.name + ' props';
    return <WrappedComponent {...{...inputs,...props}}/>
}

class Compose extends Component {
    handleClick = () => {
        const { history } = this.props;
        history.push({
            pathname: 'HOC',
            state: { fromPath: '/Compose' },
            search: window.location.search,
        });
    }
    render(){
        return <><h1>Used Compose to <span style={{fontWeight:'bold',color:'coral'}}>{this.props.name}</span></h1>
                <p onClick={this.handleClick}>Click me to go to HOC</p>
            </>
    }
}

const enhance = compose(withRouter,UseCompose({name:'Added'}));

export default enhance(Compose);
