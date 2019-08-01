import React, {Component} from 'react';

const Hoc = inputs => WrappedComponent => props => {
    // console.log("props",props, updatedProps);
    const updatedProps = inputs;
    updatedProps.age=20;
    updatedProps.name='Neeharika';
    // console.log("inputs",inputs);
    return <WrappedComponent {...{...updatedProps,...props}}/>
}

export default Hoc;
