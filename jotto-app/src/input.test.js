import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import {findByTestAttr,storeFactory} from './test/testUtil';
import Input from './input';

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} initialState - Initial State for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>)
    .dive()
    .dive();
    return wrapper;
}

describe('render', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {success: false};
        wrapper = setup(initialState);
    })
    describe('word has not been guessed', () => {
        test('renders component without error', () => {
            const component  = findByTestAttr(wrapper,"component-input");
            expect(component.length).toBe(1);
        })
        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper,"input-box");
            expect(inputBox.length).toBe(1);
        })
        test('renders submit button', () => {
            const inputBox = findByTestAttr(wrapper,"submit-button");
            expect(inputBox.length).toBe(1);
        })  
    })
    describe('word has been guessed', () => {
        test('renders component without error', () => {

        })
        test('does not renders input box', () => {

        })
        test(' does notrenders submit button', () => {
           
        })
    })
})
describe('update state', () => {

})