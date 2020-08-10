import { default as About } from '.';
import { shallow } from 'enzyme';

describe('About', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<About />);
    });

    test('it renders', () => {
        expect(wrapper.find('#about')).toHaveLength(1);
    });

});