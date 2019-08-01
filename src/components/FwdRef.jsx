import React from 'react';
import './../css/LikeCounter.css';

const Component2 = React.forwardRef((props, reference) => (
    <h4 ref={reference} style={{color: 'darkgreen'}} onClick={props.click}>Component 2: With Forward reference </h4>
));

class Component1 extends React.Component {
    constructor(props){
        super(props);
        this.compRef = React.createRef();
    }
    click = () => {
        console.log("ref",this.compRef.current);
        this.compRef.current.classList.add('text');
    }
    render(){
        return(
            <>
                <p>Component 1</p>
                <Component2 ref={this.compRef} click={this.click}/>
            </>
        );
    }
}
export default Component1;
