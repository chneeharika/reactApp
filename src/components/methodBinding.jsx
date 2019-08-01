import React from 'react';

class M extends React.Component {
    constructor (props) {
        super(props);
        this.click1 = this.click1.bind(this);
        this.click3 = this.click3.bind(this);
    }
    click(){console.log('click');}
    click1(){console.log('click1');}
    click2(){console.log('click2');}
    click3(x){console.log('click3',x);}
    click4 = () => {console.log('click4');}
    click5 = (x) =>e => {console.log('click5',x);}
    render() {
        const x= 'hi';
        return(
            <>
                <p onClick={this.click()}>0</p>{/*  This  will be called on load */}
                <p onClick={this.click1}>1</p>{/*  This  will be called only on click */}
                <p onClick={() =>this.click2()}>2</p>{/*  This  will be called only on click */}
                <p onClick={()=>this.click3(x)}>3</p>{/*  This  will be called only on click */}
                <p onClick={this.click4}>4</p>{/*  This  will be called only on click */}
                <p onClick={this.click5(x)}>5</p>{/*  This  will be called only on click */}
            </>
        );
    }

}
export default M;
