import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';

import NativeCheckbox from '../js/NativeCheckbox';

describe('<NativeCheckbox />', () => {
    describe('snapshot', () => {
        it('should render NativeCheckbox component correctly', () => {
            const NativeCheckboxComponent = mount(<NativeCheckbox />);
            expect(NativeCheckboxComponent).toMatchSnapshot();
        });
    })
    describe('indeterminate', () => {
        it('should set the JavaScript property to true when true', () => {
            const wrapper = mount(
                <NativeCheckbox indeterminate />,
            );

            assert.isTrue(wrapper.find('input').getDOMNode().indeterminate);
        });

        it('should set the JavaScript property to false when not true', () => {
            const wrapper = mount(
                <NativeCheckbox />,
            );

            assert.isFalse(wrapper.find('input').getDOMNode().indeterminate);
        });
    });
});
