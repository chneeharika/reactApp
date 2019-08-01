import React, {Component} from 'react';

class Errors extends Component {  
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }
    componentDidCatch(error, errorInfo){
        this.setState({error : error, errorInfo : errorInfo});
    }
    render() {
        if(this.state.errorInfo) {
            return (<div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </details>
              </div>);
        }
        return this.props.children
    }
}

export class Bugs extends Component {
    constructor(props){
        super(props);
        this.state = {list:[]};
        this.entry = React.createRef(); // creating refs 
    }
    click = () => {
        const nodeVal = this.entry.current; // access the element
        let list = this.state.list;
        list = list.concat(nodeVal.value);
        this.setState({list: list});
        nodeVal.value ="";
        nodeVal.focus();
    }
    render() {
            if (this.state.list.length > 5) {
                // Simulate a JS error
                throw new Error('I crashed!');
            }
            return (
                <>
                    Enter values : <input type="text" ref={this.entry}/>
                    <button onClick={this.click}>Add</button>
                    <br/> Now List contains:  
                    {this.state.list.length >0 && this.state.list.map((item, index)=><span key={index}>{item} </span>)}
                </>
            );
    }
}

export default class TestError extends Component {
    render(){
        return(
            <>
            <p>Testing Error Boundaries</p>
            <Errors>
                <Bugs/>
            </Errors>
            </>
        );
    }
}
