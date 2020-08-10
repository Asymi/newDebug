import { default as Welcome } from '.';
import { shallow } from 'enzyme';

describe('Welcome', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Welcome />);
    });

    test('it renders the title', () => {
        expect(wrapper.find('h1').text()).toContain('Sunrise, Sunset');
    });

});