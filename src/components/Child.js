import React, { Component } from 'react';
import {connect} from 'react-redux';
import Background from './Context';

class Child extends Component {
	state = {id:0}
	
  getListdata = () => {
    this.props.getList(this.props.counter);
  }
	static contextType = Background;
	render(){
		const colors = this.context;
		console.log("context",colors);
		return(
			<>
				{/*Context API*/}
				<p style={{color:colors, fontWeight:'bold'}}>Context API</p>
				{/*Passing Data to child for redux concept*/}
				<p>Child data from [{this.props.data.map((item, index)=><span key={index}>{item}  </span>)}] : {this.props.listData}</p>
				<button onClick = {this.props.dec}>Decrement</button>
				<button onClick = {this.props.decr}>Decrement by 5</button>
				<button onClick = {this.getListdata}>Get Data</button>
			</>
		);
	}
}
const mapDispatchToProps = dispatch => ({
  dec: () => dispatch({type:'DEC'}),
  decr: () => dispatch({type:'DECR',id:5}),
  getList : (id) => dispatch({type:'GET', id: id})
});

const mapStateToProps = state => ({
	listData : state.reducer2.data,
	data: state.reducer2.list
});
export default connect(mapStateToProps, mapDispatchToProps)(Child);
