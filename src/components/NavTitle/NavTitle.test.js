import React from 'react'
import { Dimensions, Platform} from 'react-native'
import {shallow} from 'enzyme'
import NavTitle from './NavTitle'
import Adapter from 'enzyme-adapter-react-16'

describe('NavTitle', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<NavTitle title="test label" numberOfLine={1}/>)
            expect(component).toMatchSnapshot()
        });
    });
});