import React, { Component } from 'react';
import {Hello} from './Hello';

class Temperature extends Component {
  constructor(props){
    super(props);
    this.state = {
      temperature :'',
      scale:'c',
      info:"",
      list:["Hello","world","welcome","to","react","!"],
      counter: this.props.counter
    };
  // this.click = this.click.bind(this);
  // this.formatNumber = this.formatNumber.bind(this);
  };
  setCelsius =(e)=> {
    this.setState({scale: 'c', temperature: e.target.value});
  };
  setFahrenheit =(e)=> {
    this.setState({scale: 'f', temperature: e.target.value});
  };
  toFahrenheit=(x)=> {
    return (x *9/5) +32;
  }
  toCelsius =(x)=> {
    return (x - 32) *5/9;
  };
  setsState=(e)=>{
  console.log("state1");
    this.setState({info: e.target.value});
  console.log("state2",this.state.info);
    this.setState({info: this.state.info + '1'});
    console.log("state3",this.state.info);
    this.setState((prevState)=>{return{...prevState, info:this.state.info + '1'}});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? this.toCelsius(temperature) : temperature;
    const fahrenheit = scale === 'c' ? this.toFahrenheit(temperature) : temperature;
    return (
      <div>
        
        {/*<div>
                  {this.state.list.map((listItem, index)=>{
                                return <li key={index}>{listItem}</li>
                            })}
                            <p>hiie</p>
                  {this.state.list.map((listItem, index)=>
                      ( <li key={index}>{listItem}</li>)
                  )}
                </div>*/}
        <Hello name="Temperature"/>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.setCelsius} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.setFahrenheit} />

        <Info value={celsius} />
        <MoreInfo value={celsius} />
        
      </div>
    );
  }
}

export default Temperature;



const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = (props) => (
      <fieldset>
        <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
        <input value={props.temperature}
               onChange={props.onTemperatureChange} />
      </fieldset>
    );

export const Info = (props) => {
  return (<React.Fragment>
          {props.value >=100 &&
           <h1>Its boiling!!!</h1>
          }
    </React.Fragment>);
};

export const MoreInfo = (props) => {
  return (<React.Fragment>
          {props.value >=100 ?
           <h4>Its boiling!!!</h4> : <h4>Water is yet to reach boiling state </h4>
          }
    </React.Fragment>);
};

export class ErrorComponent extends Component {
  
  state={
    error: ""
  };
  getDerivedStateFromProps(){

  }
}



/*Celsius: <input type="text" onChange={this.setCelsius} value={celsius} maxlength="10"/>
        
        Fahrenheit: <input type="text" onChange={this.setFahrenheit} value={fahrenheit} maxlength="10"/>
        */
