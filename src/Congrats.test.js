import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttr } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
	* Factory function to create a shalloWrapper for the Congrats component.
	*@function setup
	*@param {object} props - Component props specific to this setup
	*@returns {ShallowWrapper}
 */
const setup = (props = {}) => {
	return shallow(<Congrats {...props} />)
}

test('render without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'component-congrats');
	expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, 'component-congrats');
	expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success`', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, 'congrats-message');
	expect(message.text().length).not.toBe(0);

});