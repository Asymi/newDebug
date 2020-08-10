import NavBar from './index';
import { shallow } from 'enzyme';

describe('NavBar', () => {
    let wrapper, mockHistory;

    beforeEach(() => {
        mockHistory = { goBack: jest.fn() }
        wrapper = shallow(<NavBar history={mockHistory}/>)
    });

    test('it renders', () => {
        expect(wrapper.find('nav')).toHaveLength(1);
    });

    test('it has a back button', () => {
        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
        button.simulate('click');
        expect(mockHistory.goBack.mock.calls.length).toBe(1);
    });

    test('has 3 NavLinks', () => {
        expect(wrapper.find('NavLink')).toHaveLength(3);
    });

});