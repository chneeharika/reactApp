import React from 'react';
import {Hello} from './Hello';
import {mount, shallow, render} from 'enzyme';


describe('Hello Component test', ()=>{
    it('component props check',()=>{
        const component = <Hello name="Length"/>;
        const wrapper = mount(<Hello name="Length"/>);
        expect(wrapper.props().name).toEqual('Length');
        wrapper.setProps({name:'Currency'});
        expect(wrapper.props().name).toEqual('Currency');
    });

    it('component shallow render',()=>{
        const component = <Hello name="Length"/>;
        const wrapper = shallow(component);
        expect(wrapper).toMatchSnapshot();
    });

    it('component load',()=>{
        const wrapper = render(<Hello name="Length"/>);
        expect(wrapper.text()).toContain('Length');
        expect(wrapper.text()).toEqual('Length Convertor');
    });
});

