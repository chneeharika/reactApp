import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      phone: ""
    };
  // this.click = this.click.bind(this);
  // this.formatNumber = this.formatNumber.bind(this);
  };
  click =(e)=> {
    this.setState({phone : e.target.value});
  };
  formatNumber =(x) => {
    var numbers;
    if((/(\d{3})(\d{3})(d{4})/).test(x))
      numbers =x.replace(/(\d{3})(\d{3})(d{4})/, '$1.$2.$3');
    else if((/(\d{3})(\d{3})/).test(x))
      numbers = x.replace(/(\d{3})(\d{3})/, '$1.$2.');
    else
      numbers = x.replace(/(\d{3})/, '$1.');
      
    console.log(numbers);
    return numbers;
  };
  render() {
    var phoneNumber = this.state.phone;
    var formattedPhone = this.formatNumber(phoneNumber);
    return (
      <div>
        <input type="text" onChange={this.click}  maxlength="10"/>
        <p>Formatted number : {formattedPhone}</p>
      </div>
    );
  }
}
export default App;
