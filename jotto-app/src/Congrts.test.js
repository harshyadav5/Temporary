import React from 'react';
import Enzyme, {shallow, ShallowWrapper} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrts from './Congrts';
import { findByTestAttr,checkProps } from './test/testUtil';

Enzyme.configure({adapter : new EnzymeAdapter});
const defaultProps = {success:false};

/**
 * Factory function to create a ShallowWrapper for the congrts component
 * @function setUp
 * @param {*} props - Component props specifictot this setup
 * @returns {ShallowWrapper}
 */
 const setUp = (props={}) => {
     const setUpProps = {...defaultProps,...props}
     return shallow(<Congrts {...setUpProps} />)
 }

 test('render without error', () => {
     const wrapper = setUp({success:false});
     const component = findByTestAttr(wrapper,'component-congrts');
     expect(component.length).toBe(1);
 }) 

 test('renders no text when `success` prop is false', () => {
     const wrapper = setUp({success:false});
     const component = findByTestAttr(wrapper,'component-congrts');
     expect(component.text()).toBe('');
 })
 test('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setUp({success:true});
    const message = findByTestAttr(wrapper,'component-congrts');
    expect(message.text().length).not.toBe(0);
 })
 test('does not throw warning with expected props',() => {
     const expectedProps = {success: false};
     checkProps(Congrts,expectedProps);
 })
