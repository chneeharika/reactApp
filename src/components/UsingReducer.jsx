import React, { Component } from 'react';
import {connect} from 'react-redux';
import Child from './Child';
import Background from './Context';

class UsingReducer extends Component {
    constructor(props){
        super(props);
    };

  render() {
      console.log('counter', this.props.data);
    return (
      <div>
        <p>Parent : {this.props.counter}</p>
        <button onClick = {this.props.increment}>Increment</button>
        <Background.Provider value='purple'>
					<Child counter={this.props.counter}/>
        </Background.Provider>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({type:'INC'})
});

const mapStateToProps = state => ({
  counter : state.reducer1.counter,
  data:state
});
export default connect(mapStateToProps, mapDispatchToProps)(UsingReducer);
